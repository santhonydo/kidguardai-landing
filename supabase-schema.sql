-- KidGuard AI Waitlist Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create waitlist table
create table if not exists waitlist (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  platform text check (platform in ('ios', 'macos', 'both')) not null,
  created_at timestamp with time zone default now(),
  referral_code text,
  metadata jsonb default '{}'::jsonb,

  -- Indexes for performance
  constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for faster lookups
create index if not exists idx_waitlist_email on waitlist(email);

-- Create index on created_at for sorting
create index if not exists idx_waitlist_created_at on waitlist(created_at desc);

-- Create index on referral_code for tracking
create index if not exists idx_waitlist_referral_code on waitlist(referral_code);

-- Enable Row Level Security (RLS)
alter table waitlist enable row level security;

-- Create policy to allow public inserts (for waitlist signups)
create policy "Allow public inserts"
  on waitlist
  for insert
  to anon
  with check (true);

-- Create policy to allow public reads (for count display)
create policy "Allow public reads of count"
  on waitlist
  for select
  to anon
  using (true);

-- Optional: Create a function to get waitlist count
create or replace function get_waitlist_count()
returns bigint
language sql
stable
as $$
  select count(*) from waitlist;
$$;

-- Optional: Create a view for anonymous stats (no emails exposed)
create or replace view waitlist_stats as
select
  count(*) as total_signups,
  count(*) filter (where platform = 'ios') as ios_signups,
  count(*) filter (where platform = 'macos') as macos_signups,
  count(*) filter (where platform = 'both') as both_signups,
  date_trunc('day', created_at) as signup_date
from waitlist
group by date_trunc('day', created_at)
order by signup_date desc;

-- Grant access to the view
grant select on waitlist_stats to anon;

-- Comments for documentation
comment on table waitlist is 'Stores email signups for KidGuard AI launch waitlist';
comment on column waitlist.email is 'User email address (unique)';
comment on column waitlist.platform is 'Target platform: ios, macos, or both';
comment on column waitlist.referral_code is 'Optional referral code for tracking source';
comment on column waitlist.metadata is 'Additional user data (JSON)';

-- ============================================
-- PREORDERS TABLE (Polar.sh Integration)
-- ============================================

-- Create preorders table for tracking Polar.sh purchases
create table if not exists preorders (
  id uuid primary key default uuid_generate_v4(),
  polar_checkout_id text unique not null,
  polar_customer_id text,
  email text not null,
  tier text check (tier in ('premium', 'premium_plus')) not null,
  amount_cents integer not null,
  currency text default 'USD',
  status text check (status in ('pending', 'completed', 'refunded', 'cancelled')) default 'pending',
  created_at timestamp with time zone default now(),
  completed_at timestamp with time zone,
  metadata jsonb default '{}'::jsonb,

  -- Indexes for performance
  constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create indexes
create index if not exists idx_preorders_email on preorders(email);
create index if not exists idx_preorders_polar_checkout_id on preorders(polar_checkout_id);
create index if not exists idx_preorders_polar_customer_id on preorders(polar_customer_id);
create index if not exists idx_preorders_status on preorders(status);
create index if not exists idx_preorders_created_at on preorders(created_at desc);

-- Enable Row Level Security (RLS)
alter table preorders enable row level security;

-- Create policy to allow public inserts (for webhook processing)
create policy "Allow public inserts for preorders"
  on preorders
  for insert
  to anon
  with check (true);

-- Create policy to allow public reads of count
create policy "Allow public reads of preorder count"
  on preorders
  for select
  to anon
  using (true);

-- Function to get preorder count
create or replace function get_preorder_count()
returns bigint
language sql
stable
as $$
  select count(*) from preorders where status = 'completed';
$$;

-- Function to get total spots remaining (out of 500)
create or replace function get_spots_remaining()
returns bigint
language sql
stable
as $$
  select greatest(0, 500 - count(*)) from preorders where status = 'completed';
$$;

-- Create a view for preorder stats
create or replace view preorder_stats as
select
  count(*) as total_preorders,
  count(*) filter (where status = 'completed') as completed_preorders,
  count(*) filter (where status = 'pending') as pending_preorders,
  count(*) filter (where tier = 'premium') as premium_tier,
  count(*) filter (where tier = 'premium_plus') as premium_plus_tier,
  sum(amount_cents) filter (where status = 'completed') as total_revenue_cents,
  date_trunc('day', created_at) as preorder_date
from preorders
group by date_trunc('day', created_at)
order by preorder_date desc;

-- Grant access to the view
grant select on preorder_stats to anon;

-- Comments for documentation
comment on table preorders is 'Stores Polar.sh preorder purchases for KidGuard AI early access';
comment on column preorders.polar_checkout_id is 'Polar.sh checkout session ID (unique)';
comment on column preorders.polar_customer_id is 'Polar.sh customer ID';
comment on column preorders.email is 'Customer email address';
comment on column preorders.tier is 'Subscription tier: premium ($79) or premium_plus ($149)';
comment on column preorders.amount_cents is 'Purchase amount in cents';
comment on column preorders.status is 'Payment status: pending, completed, refunded, cancelled';
comment on column preorders.metadata is 'Additional purchase data (JSON)';
