export interface Competitor {
  slug: string
  name: string
  shortName: string
  pricing: string
  targetKeyword: string
  commonComplaint: string
  weakPoints: string[]
  strengths: string[]
  comparison: {
    macSupport: {
      competitor: string
      kidguard: string
    }
    browserCoverage: {
      competitor: string
      kidguard: string
    }
    privacy: {
      competitor: string
      kidguard: string
    }
    naturalLanguage: {
      competitor: string
      kidguard: string
    }
    smsAgent: {
      competitor: string
      kidguard: string
    }
    pricing: {
      competitor: string
      kidguard: string
    }
  }
  migrationSteps: string[]
}

export const competitors: Competitor[] = [
  {
    slug: 'qustodio-alternative',
    name: 'Qustodio',
    shortName: 'Qustodio',
    pricing: '$10.49/month',
    targetKeyword: 'qustodio alternative',
    commonComplaint: 'Only works with Safari on Mac. Chrome and Firefox users are unprotected.',
    weakPoints: [
      'Mac support (Safari only)',
      'No browser coverage (Chrome, Firefox)',
      'Cloud-based privacy concerns',
      'No natural language controls',
      'One-way alerts only'
    ],
    strengths: [
      'Good iOS support',
      'Comprehensive activity reports',
      'Multiple platform support (Windows, Android)'
    ],
    comparison: {
      macSupport: {
        competitor: 'Safari browser only - Chrome and Firefox are completely unprotected',
        kidguard: 'System-wide HTTPS filtering blocks ALL browsers (Safari, Chrome, Firefox, Edge, Brave)'
      },
      browserCoverage: {
        competitor: 'Safari only on macOS',
        kidguard: 'All browsers on macOS (Chrome, Firefox, Safari, Edge, Brave, Opera)'
      },
      privacy: {
        competitor: 'Sends all browsing data to cloud servers for analysis',
        kidguard: '100% on-device AI processing - zero cloud tracking'
      },
      naturalLanguage: {
        competitor: 'Manual configuration through complex menus and checkboxes',
        kidguard: 'Just say "Block social media after 8 PM" - AI converts to working rules'
      },
      smsAgent: {
        competitor: 'One-way SMS alerts (you can\'t respond or control)',
        kidguard: 'Full two-way SMS conversation - check status, adjust rules, pause protection'
      },
      pricing: {
        competitor: '$10.49/month for 5 devices',
        kidguard: '$9.99/month for unlimited devices and kids'
      }
    },
    migrationSteps: [
      'Export your existing Qustodio rules (if any)',
      'Install KidGuard AI on your Mac and iOS devices',
      'Import rules using our natural language import (or just tell us what you had)',
      'Test blocking on Chrome/Firefox (which Qustodio couldn\'t handle)',
      'Uninstall Qustodio and cancel subscription'
    ]
  },
  {
    slug: 'bark-alternative',
    name: 'Bark',
    shortName: 'Bark',
    pricing: '$14/month',
    targetKeyword: 'bark alternative',
    commonComplaint: 'No macOS support at all. Only monitors social media, doesn\'t block websites.',
    weakPoints: [
      'Zero macOS support',
      'No website blocking (monitoring only)',
      'Expensive ($14/month)',
      'Cloud-based privacy concerns',
      'No real-time control'
    ],
    strengths: [
      'Excellent social media monitoring',
      'Good alerting system',
      'Family-friendly interface'
    ],
    comparison: {
      macSupport: {
        competitor: 'Not supported - Mac users have zero protection',
        kidguard: 'Full macOS support with system-wide browser blocking'
      },
      browserCoverage: {
        competitor: 'Not applicable (no Mac support)',
        kidguard: 'All browsers on macOS and iOS'
      },
      privacy: {
        competitor: 'Monitors social media by logging into accounts - full cloud access to messages',
        kidguard: '100% on-device AI - we never see your child\'s data'
      },
      naturalLanguage: {
        competitor: 'Monitoring-only approach with limited parental control',
        kidguard: 'Natural language rule creation with voice support'
      },
      smsAgent: {
        competitor: 'One-way alerts to parent (monitoring only)',
        kidguard: 'Two-way SMS control - monitor AND control remotely'
      },
      pricing: {
        competitor: '$14/month per family',
        kidguard: '$9.99/month for unlimited devices'
      }
    },
    migrationSteps: [
      'Note which social media accounts you were monitoring',
      'Install KidGuard AI on all devices (including Macs)',
      'Set up blocking rules for the platforms you were monitoring',
      'Enable real-time alerts for inappropriate content',
      'Cancel Bark subscription'
    ]
  },
  {
    slug: 'norton-family-alternative',
    name: 'Norton Family',
    shortName: 'Norton Family',
    pricing: '$49.99/year',
    targetKeyword: 'norton family alternative',
    commonComplaint: 'Unreliable Mac support, frequent bugs, requires Norton 360 subscription.',
    weakPoints: [
      'Poor Mac support',
      'Requires Norton 360 subscription',
      'Frequent compatibility issues',
      'No AI-based filtering',
      'Complex setup process'
    ],
    strengths: [
      'Integrated with Norton 360 security',
      'Good Windows support',
      'Parental insights reports'
    ],
    comparison: {
      macSupport: {
        competitor: 'Unreliable, frequent updates required, often breaks with macOS updates',
        kidguard: 'Native macOS system extension - reliable and secure'
      },
      browserCoverage: {
        competitor: 'Limited browser support on Mac',
        kidguard: 'All browsers (Chrome, Firefox, Safari, Edge, Brave)'
      },
      privacy: {
        competitor: 'Cloud-based filtering with Norton servers',
        kidguard: '100% on-device AI processing'
      },
      naturalLanguage: {
        competitor: 'Manual category selection and website lists',
        kidguard: 'Natural language: "Block violent games during homework time"'
      },
      smsAgent: {
        competitor: 'Email alerts only',
        kidguard: 'Full two-way SMS control from any phone'
      },
      pricing: {
        competitor: '$49.99/year (requires Norton 360 at $99.99/year)',
        kidguard: '$79/year standalone (early bird) - no additional subscriptions needed'
      }
    },
    migrationSteps: [
      'Document your current Norton Family rules',
      'Install KidGuard AI',
      'Import rules using natural language (simpler than Norton\'s interface)',
      'Test thoroughly on all browsers',
      'Cancel Norton Family (keep Norton 360 if you use it for antivirus)'
    ]
  },
  {
    slug: 'apple-screen-time-alternative',
    name: 'Apple Screen Time',
    shortName: 'Screen Time',
    pricing: 'Free',
    targetKeyword: 'apple screen time alternative',
    commonComplaint: 'Doesn\'t block web content on macOS. Kids can bypass it easily.',
    weakPoints: [
      'No web content filtering on macOS',
      'App limits only',
      'Easy to bypass (change time zone, reinstall apps)',
      'No AI-based content analysis',
      'Limited cross-device sync'
    ],
    strengths: [
      'Built into iOS/macOS',
      'Free',
      'Simple interface',
      'Good for screen time limits'
    ],
    comparison: {
      macSupport: {
        competitor: 'App limits only - no website blocking or content filtering',
        kidguard: 'Full system-wide content filtering with AI'
      },
      browserCoverage: {
        competitor: 'Does not filter web content on macOS',
        kidguard: 'Blocks inappropriate content across all browsers'
      },
      privacy: {
        competitor: 'Data stays on-device (good)',
        kidguard: 'Data stays on-device with advanced AI filtering'
      },
      naturalLanguage: {
        competitor: 'Manual app selection and time limits',
        kidguard: 'Natural language rules: "Block gaming until homework is done"'
      },
      smsAgent: {
        competitor: 'No remote control',
        kidguard: 'Full two-way SMS control - adjust rules from anywhere'
      },
      pricing: {
        competitor: 'Free',
        kidguard: '$9.99/month - pays for advanced AI and cross-browser protection'
      }
    },
    migrationSteps: [
      'Note your current Screen Time limits and app restrictions',
      'Install KidGuard AI',
      'Create natural language rules that match your Screen Time limits',
      'Add web content filtering (which Screen Time can\'t do)',
      'Keep Screen Time for additional app limits if desired (compatible)'
    ]
  },
  {
    slug: 'net-nanny-alternative',
    name: 'Net Nanny',
    shortName: 'Net Nanny',
    pricing: '$89.99/year',
    targetKeyword: 'net nanny alternative',
    commonComplaint: 'Outdated technology, uses blocklists instead of AI, expensive.',
    weakPoints: [
      'Blocklist-based (not AI)',
      'Expensive ($89.99/year for 5 devices)',
      'Slow to detect new threats',
      'Poor Mac support',
      'Complex configuration'
    ],
    strengths: [
      'Long-established brand',
      'Good customer support',
      'Multi-platform support'
    ],
    comparison: {
      macSupport: {
        competitor: 'Basic Mac support with limited browser coverage',
        kidguard: 'Full macOS support with system-level filtering'
      },
      browserCoverage: {
        competitor: 'Limited to specific browsers',
        kidguard: 'All browsers blocked (Chrome, Firefox, Safari, Edge, Brave)'
      },
      privacy: {
        competitor: 'Cloud-based blocklist checking',
        kidguard: '100% on-device AI - no cloud lookups'
      },
      naturalLanguage: {
        competitor: 'Manual category and site blocking',
        kidguard: 'Natural language rule creation with AI'
      },
      smsAgent: {
        competitor: 'Email alerts only',
        kidguard: 'Two-way SMS control from any phone'
      },
      pricing: {
        competitor: '$89.99/year for 5 devices',
        kidguard: '$79/year for unlimited devices (early bird)'
      }
    },
    migrationSteps: [
      'Export your Net Nanny block lists',
      'Install KidGuard AI',
      'Our AI automatically categorizes sites (no need for manual lists)',
      'Set up natural language rules to replace category blocks',
      'Cancel Net Nanny subscription'
    ]
  }
]

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find(c => c.slug === slug)
}

export function getAllCompetitorSlugs(): string[] {
  return competitors.map(c => c.slug)
}
