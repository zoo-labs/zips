/**
 * Zoo Improvement Proposals (ZIPs) Configuration
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'discord' | 'telegram' | 'youtube' | 'linkedin' | 'website';
  href: string;
  label?: string;
}

export interface RFCConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  baseUrl: string;
  repoUrl: string;
  forumUrl?: string;
  helpUrl?: string;
  docsUrl?: string;
  rfcDir: string;
  filePrefix: string;
  categories: CategoryConfig[];
  branding: { primaryColor: string; logo?: string; };
  theme: { storageKey: string; defaultTheme: 'light' | 'dark' | 'system'; };
  footer: {
    sections: FooterSection[];
    copyright: string;
    socials: SocialLink[];
  };
}

export interface CategoryConfig {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  range: [number, number];
  icon: string;
  color: string;
  learnMore?: string;
  keyTopics?: string[];
}

const config: RFCConfig = {
  name: 'Zoo Improvement Proposals',
  shortName: 'ZIP',
  title: 'ZIPs - Zoo Labs Foundation Standards',
  description: 'Improvement proposals for the Zoo decentralized AI research network.',

  baseUrl: 'https://zips.zoo.ngo',
  repoUrl: 'https://github.com/zoo-labs/zips',
  forumUrl: 'https://forum.zoo.ngo',
  helpUrl: 'https://zoo.ngo/docs',
  docsUrl: 'https://docs.zoo.ngo',

  rfcDir: 'ZIPs',
  filePrefix: 'zip-',

  categories: [
    {
      slug: 'core',
      name: 'Core Infrastructure',
      shortDesc: 'Network fundamentals',
      description: 'Core infrastructure for Zoo decentralized research network.',
      range: [0, 99],
      icon: 'layers',
      color: 'blue',
      keyTopics: ['Architecture', 'Protocols', 'Standards'],
    },
    {
      slug: 'deai',
      name: 'Decentralized AI',
      shortDesc: 'DeAI standards',
      description: 'Decentralized AI training and inference protocols.',
      range: [100, 199],
      icon: 'brain',
      color: 'purple',
      keyTopics: ['Training', 'Inference', 'Coordination'],
    },
    {
      slug: 'desci',
      name: 'Decentralized Science',
      shortDesc: 'DeSci standards',
      description: 'Decentralized science publishing and research coordination.',
      range: [200, 299],
      icon: 'flask',
      color: 'emerald',
      keyTopics: ['Publishing', 'Peer Review', 'Funding'],
    },
  ],

  branding: { primaryColor: 'emerald' },
  theme: { storageKey: 'zoo-zips-theme', defaultTheme: 'system' },

  footer: {
    sections: [
      {
        title: 'Categories',
        links: [
          { label: 'Core Infrastructure', href: '/docs/?type=core' },
          { label: 'Decentralized AI', href: '/docs/?type=deai' },
          { label: 'Decentralized Science', href: '/docs/?type=desci' },
          { label: 'Governance', href: '/docs/?type=governance' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'All Proposals', href: '/docs/' },
          { label: 'Research Docs', href: 'https://docs.zoo.ngo', external: true },
          { label: 'Help Center', href: 'https://zoo.ngo/help', external: true },
          { label: 'Discussion Forum', href: 'https://forum.zoo.ngo', external: true },
        ],
      },
      {
        title: 'Ecosystem',
        links: [
          { label: 'Zoo Labs', href: 'https://zoo.ngo', external: true },
          { label: 'Research Portal', href: 'https://research.zoo.ngo', external: true },
          { label: 'Data Commons', href: 'https://data.zoo.ngo', external: true },
          { label: 'Compute Network', href: 'https://compute.zoo.ngo', external: true },
        ],
      },
      {
        title: 'Organization',
        links: [
          { label: 'Zoo Foundation', href: 'https://zoo.ngo/foundation', external: true },
          { label: 'Hanzo AI', href: 'https://hanzo.ai', external: true },
          { label: 'Lux Network', href: 'https://lux.network', external: true },
          { label: 'GitHub', href: 'https://github.com/zoo-labs', external: true },
        ],
      },
    ],
    copyright: 'Zoo Labs Foundation',
    socials: [
      { platform: 'github', href: 'https://github.com/zoo-labs' },
      { platform: 'twitter', href: 'https://x.com/zaboratories', label: 'X' },
      { platform: 'discord', href: 'https://discord.gg/zoo' },
      { platform: 'telegram', href: 'https://t.me/zoolabs' },
    ],
  },
};

export default config;
export { config };
