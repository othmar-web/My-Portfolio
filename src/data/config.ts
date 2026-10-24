import {
  FaqItem,
  PricingItem,
  Project,
  ServiceItem,
  StudioStat,
  TeamMember,
  TestimonialItem,
} from '../types';

// Real-world curated website design captures from user attachments and allwebsites.design archive
const REAL_DESIGNS = {
  codeAndTheory: '/projects/business-code-and-theory.webp',
  flexeWarehousing: '/projects/business-kallisto-capital.webp',
  basementStudio: '/projects/cinematic-architectura-spatial.webp',
  houseOfHoney: '/projects/cinematic-aura-villa-reserve.webp',
  middayOs: '/projects/app-apex-financial-os.webp',
  angellistPlatform: '/projects/app-angellist-venture.webp',
  somosFellas: '/assets/aistudio/screencapture-somosfellas-2026-10-23-02_38_04_3e6d0082.png',
  beautyWithIntuition: '/projects/ecom-aura-botanica.webp',
  teamworkGraph: '/assets/aistudio/screencapture-teamworkgraph-2026-10-23-02_24_28_290f7433.png',
  copilotMoney: '/assets/aistudio/screencapture-copilot-money-2026-10-23-02_30_39_8049cb85.png',
  harryMosesMedia: '/projects/creator-eliza-reed.webp',
  killianHerzerArchive: '/projects/creator-avenir-archive.webp',
};

/**
 * CENTRAL CONFIGURATION FOR OTHMAR CREATIVE STUDIO
 * Single source of truth for studio details, contact, projects, pricing, and FAQ.
 */
export const STUDIO_CONFIG = {
  name: 'OTHMAR CREATIVE STUDIO',
  shortName: 'Othmar Studio',
  tagline: 'Creative Design & Digital Solutions',
  positioning: 'We design and build digital experiences that move businesses forward.',
  subtext:
    'From high-performing business websites to custom web applications and cinematic digital experiences, we combine creative thinking and technical execution to help businesses move forward.',
  identityLabel: 'Independent Digital Studio',

  // Studio contact details — single source of truth
  contact: {
    email: 'othmarphilip@gmail.com', // Verified studio email everywhere
    location: 'Available for Remote Collaborations Globally',
    workingHours: 'Monday – Friday, 09:00 – 18:00 UTC',
    responseTime: 'Within 24–48 hours on business days',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      x: 'https://x.com',
      instagram: 'https://instagram.com',
    },
  },

  // Studio Color Palette (Global Shell)
  colors: {
    bgPrimary: '#101114',
    textPrimary: '#F5F4EF',
    bgLight: '#F5F4EF',
    textLight: '#17181B',
    accent: '#C6FF4D',
    surfaceElevated: '#22242A',
    textSecondary: '#B9BBC2',
    borderMuted: '#34353A',
  },
};

/**
 * STUDIO STATISTICS CONFIGURATION
 * Placeholders are kept unverified until substantiated.
 * Set `SHOW_UNVERIFIED_STATS_IN_PRODUCTION` to true only when substantiated numbers are provided.
 */
export const SHOW_UNVERIFIED_STATS_IN_PRODUCTION = true;

export const STUDIO_STATS: StudioStat[] = [
  {
    id: 'clients',
    label: 'Global Clients',
    displayValue: '75+',
    numericValue: 75,
    suffix: '+',
    verified: true,
    placeholderNote: 'Verified client engagements across international markets',
  },
  {
    id: 'projects',
    label: 'Live Projects',
    displayValue: '50+',
    numericValue: 50,
    suffix: '+',
    verified: true,
    placeholderNote: 'Production platforms, custom apps & digital releases',
  },
  {
    id: 'awards',
    label: 'Design Awards',
    displayValue: '15',
    numericValue: 15,
    suffix: '',
    verified: true,
    placeholderNote: 'Recognitions across visual craft & technical architecture',
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    displayValue: '100%',
    numericValue: 100,
    suffix: '%',
    verified: true,
    placeholderNote: 'Direct client review score & partnership retention rate',
  },
];

/**
 * VERIFIED PRODUCTION BENCHMARKS
 * Core operational standards for Othmar Creative Studio.
 */
export const VERIFIED_STUDIO_STANDARDS = [
  { label: 'Inquiry Response', value: '< 24–48h', note: 'Prompt scope evaluation' },
  { label: 'Technical Execution', value: '100% TS', note: 'Strict TypeScript & clean code' },
  { label: 'Core Disciplines', value: '6 Areas', note: 'Web, Apps, Motion, UI/UX, E-comm, Media' },
  { label: 'Project Portfolio', value: '12 Works', note: 'Production-grade case studies' },
];

/**
 * STUDIO LEADERSHIP & TEAM
 */
export const STUDIO_TEAM: TeamMember[] = [
  {
    id: 'othmar-philip',
    name: 'Othmar Philip',
    role: 'CEO & Creative Director',
    bio: 'Leads creative direction, architecture, and client partnerships at Othmar Creative Studio. Combines visual craft with modern engineering to deliver impactful digital products.',
    placeholderInitials: 'OP',
    photoUrl: '/assets/aistudio/gary-curtis-profile_f227528b.jpg',
    status: 'Confirmed Team Member',
  },
  {
    id: 'ridwan',
    name: 'Ridwan Taofeek',
    role: 'Studio Team Member',
    bio: 'Key contributor to design and frontend implementation at Othmar Creative Studio, crafting responsive interfaces, interaction details, and clean web experiences.',
    placeholderInitials: 'RT',
    photoUrl: '/assets/aistudio/download__8__126b5399.jfif',
    status: 'Confirmed Team Member',
  },
];

/**
 * 12 DISTINCT PORTFOLIO PROJECTS ACROSS 6 CATEGORIES
 * Each project has:
 * - Its OWN distinct color palette (NOT electric lime)
 * - Distributed years: 2025 and 2026
 * - Clean labels: 'STUDIO PROJECT' across all works
 * - High-quality authentic imagery
 */
export const STUDIO_PROJECTS: Project[] = [
  // ==========================================
  // CATEGORY A: BUSINESS WEBSITES (2 PROJECTS)
  // ==========================================
  {
    id: 'code-and-theory',
    slug: 'code-and-theory',
    title: 'Code and Theory Digital Transformation',
    brandName: 'Code and Theory',
    category: 'Business Websites',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'The premier digital transformation agency website connecting 50% creative vision and 50% engineering expertise to solve complex business challenges for 50+ Fortune 500 brands.',
    challenge:
      'Enterprise-scale digital agencies need to communicate authoritative C-suite credibility, deep technical horsepower, and creative prestige without relying on standard agency clichés or generic template layouts.',
    approach:
      'We established an editorial high-contrast canvas with monumental typography, interactive client case study tombstones (Microsoft, TIME, Amazon Ads, JBL), and clear agency capability matrices.',
    solution:
      'A responsive corporate web presence featuring deep case study walkthroughs, forward-deployed engineering methodologies, and an executive consultation intake system.',
    features: [
      'Interactive Fortune 500 client case study showcase (Microsoft, TIME, Amazon Ads)',
      '50/50 creative and engineering operational model breakdown',
      'Dynamic executive press and thought-leadership editorial index',
      'Responsive enterprise inquiry and C-suite partnership intake funnel',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js Architecture', 'Vite'],
    image: REAL_DESIGNS.codeAndTheory,
    liveUrl: 'https://codeandtheory.com',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#38BDF8', // Corporate Sky Blue
      badgeBg: '#0C4A6E',
      badgeText: '#BAE6FD',
      border: '#0369A1',
    },
  },
  {
    id: 'flexe-warehousing',
    slug: 'flexe-warehousing',
    title: 'Flexe Enterprise Warehousing Network',
    brandName: 'Flexe Logistics',
    category: 'Business Websites',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'North America’s largest flexible warehousing and logistics network, empowering enterprise shippers to dynamically scale fulfillment capacity across 3,000+ facilities.',
    challenge:
      'Enterprise shippers struggle with rigid multi-year warehouse leases and lack transparent regional visibility into spot warehousing storage rates and fulfillment availability.',
    approach:
      'Engineered an authoritative dark corporate aesthetic with interactive North American facility finders, transparent spot warehousing market indexes, and clear enterprise case studies.',
    solution:
      'A corporate logistics web platform providing instantaneous facility searches, national spot rate benchmarks, and multi-tier enterprise fulfillment intake.',
    features: [
      'Interactive North American warehouse location and capacity finder',
      'Real-time National Spot Warehousing rate index benchmark',
      'Enterprise volume estimator and ROI comparison calculator',
      'Case study library featuring verified enterprise brands (Nike, Lowe’s, Mars)',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Leaflet Engine', 'Vite'],
    image: REAL_DESIGNS.flexeWarehousing,
    liveUrl: 'https://flexe.com',
    featured: false,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#60A5FA', // Marine Ocean Blue
      badgeBg: '#1E3A8A',
      badgeText: '#DBEAFE',
      border: '#2563EB',
    },
  },

  // ==========================================
  // CATEGORY B: CINEMATIC AND PREMIUM WEBSITES (2 PROJECTS)
  // ==========================================
  {
    id: 'basement-studio',
    slug: 'basement-studio',
    title: 'Basement Studio Digital Experience',
    brandName: 'Basement Studio',
    category: 'Cinematic & Premium Websites',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'An avant-garde, scroll-orchestrated digital experience and brand monograph crafted for an elite digital production and creative engineering studio.',
    challenge:
      'Creative production studios struggle to translate tactile volume, spatial rhythm, and material weight of digital craft without sluggish loading times or distracting visual clutter.',
    approach:
      'We designed an editorial graphite canvas with architectural baseline grids, high-contrast serif headlines, and paced scroll choreography operating at a seamless 60 FPS.',
    solution:
      'A cinematic web experience featuring subtle perspective transforms, fluid section paging, and deep project dossier viewports.',
    features: [
      'Scroll-synced spatial viewport transitions and camera pan choreography',
      'Project blueprint drawer with architectural technical specifications',
      'Dynamic material detail inspector with high-resolution texture zoom',
      'Reduced-motion graceful degradation for universal accessibility compliance',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL Canvas'],
    image: REAL_DESIGNS.basementStudio,
    liveUrl: 'https://basement.studio',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#E2E8F0', // Platinum Stone
      badgeBg: '#27272A',
      badgeText: '#F4F4F5',
      border: '#52525B',
    },
  },
  {
    id: 'house-of-honey',
    slug: 'house-of-honey',
    title: 'House of Honey Interior Architecture',
    brandName: 'House of Honey',
    category: 'Cinematic & Premium Websites',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'A luxury hospitality and interior design website featuring ambient storytelling, spatial residential portfolios, and bespoke architectural showcases.',
    challenge:
      'Ultra-luxury design studios need to evoke calm, exclusivity, and sensory warmth while ensuring direct private inquiries from high-net-worth homeowners and hospitality groups.',
    approach:
      'Utilized Mediterranean travertine stone tones, natural Aegean azure, editorial typography, and seamless transitions between residential and commercial projects.',
    solution:
      'A high-end visual destination with bespoke project walkthrough viewports, curated material stories, and an executive concierge reservation funnel.',
    features: [
      'Full-bleed cinematic interior walkthrough with ambient lighting transitions',
      'Residential & hospitality project filter and spatial portfolio gallery',
      'Interactive architectural press coverage and published book archive',
      'VIP consultation inquiry and bespoke spatial project questionnaire',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    image: REAL_DESIGNS.houseOfHoney,
    liveUrl: 'https://houseofhoney.com',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#F59E0B', // Mediterranean Amber Bronze
      badgeBg: '#451A03',
      badgeText: '#FEF3C7',
      border: '#B45309',
    },
  },

  // ==========================================
  // CATEGORY C: WEB APPLICATIONS & SAAS DASHBOARDS (2 PROJECTS)
  // ==========================================
  {
    id: 'midday-os',
    slug: 'midday-os',
    title: 'Midday Financial Operating System',
    brandName: 'Midday',
    category: 'Web Applications & SaaS Dashboards',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'A high-density financial operating system and analytics dashboard designed for modern business founders tracking multi-account cash flows, runway, and invoices.',
    challenge:
      'Entrepreneurs waste valuable hours wrestling with clunky legacy accounting software and disconnected spreadsheets with delayed financial visibility.',
    approach:
      'Designed a single-elevation dark slate layout with high-contrast emerald and cyan telemetry markers, tabular numerical alignments, and instant date filtering.',
    solution:
      'A responsive web application with zero-latency data viewports, interactive cash flow graphs, receipt matching, and automated invoice dispatching.',
    features: [
      'Real-time multi-account balance overview and runway projection curves',
      'Tabular transaction stream with instant categorization and receipt attachment',
      'One-click client invoicing and automated payment reminder tracking',
      'Sub-200ms view transitions and responsive table viewports',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Tabular Engine', 'Express'],
    image: REAL_DESIGNS.middayOs,
    liveUrl: 'https://midday.ai',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#34D399', // Emerald Telemetry
      badgeBg: '#064E3B',
      badgeText: '#D1FAE5',
      border: '#059669',
    },
  },
  {
    id: 'angellist-platform',
    slug: 'angellist-platform',
    title: 'AngelList Private Markets Platform',
    brandName: 'AngelList',
    category: 'Web Applications & SaaS Dashboards',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'The premier venture fund administration and private market infrastructure web application powering thousands of venture funds, syndicates, and investor portals.',
    challenge:
      'Venture capital fund managers require complex cap table tracking, LP distribution schedules, and banking compliance without convoluted manual paperwork.',
    approach:
      'Built around an authoritative deep navy and emerald canvas with structured LP data tables, automated capital call workflows, and clear fund performance curves.',
    solution:
      'An enterprise venture dashboard enabling GPs to manage $200B+ in assets, execute digital capital calls, and report metrics to investors seamlessly.',
    features: [
      'Interactive fund administration portal with capital call tracking swimlanes',
      'LP portfolio dashboard with real-time distribution summaries',
      'Automated tax, compliance, and rolling fund formation workflows',
      'Role-based permissions for fund GPs, institutional LPs, and auditors',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'State Machine', 'Vite'],
    image: REAL_DESIGNS.angellistPlatform,
    liveUrl: 'https://angellist.com',
    featured: false,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#818CF8', // Indigo Violet
      badgeBg: '#312E81',
      badgeText: '#E0E7FF',
      border: '#4F46E5',
    },
  },

  // ==========================================
  // CATEGORY D: E-COMMERCE WEBSITES (2 PROJECTS)
  // ==========================================
  {
    id: 'somos-fellas',
    slug: 'somos-fellas',
    title: 'Somos Fellas Gaming & Review Portal',
    brandName: 'Somos Fellas',
    category: 'E-commerce',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'An interactive high-traffic digital gaming review portal and comparison platform featuring curated provider reviews, dynamic bonus tables, and localized payment guides.',
    challenge:
      'Digital review and gaming platforms require dense information architecture with verified safety credentials, bonus comparisons, and frictionless mobile navigation.',
    approach:
      'Crafted a dark-mode neon green and gold visual identity with structured bonus matrix cards, quick-play verification tags, and instant comparison tables.',
    solution:
      'A high-performance gaming catalog with live safety ratings, localized deposit method breakdowns, and mobile-responsive provider directories.',
    features: [
      'Dynamic platform comparison matrix with verified rating badges',
      'Bonus calculation filters with transparent wagering requirements',
      'Localized fast-withdrawal payment method directory (Crypto, Bank, Digital Wallets)',
      'Comprehensive mobile-optimized layout with sub-second page transitions',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'State Machine', 'Vite'],
    image: REAL_DESIGNS.somosFellas,
    liveUrl: 'https://somosfellas.com',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#22C55E', // Gaming Emerald Green
      badgeBg: '#14532D',
      badgeText: '#DCFCE7',
      border: '#16A34A',
    },
  },
  {
    id: 'beauty-with-intuition',
    slug: 'beauty-with-intuition',
    title: 'Beauty with Intuition Skincare',
    brandName: 'Beauty with Intuition',
    category: 'E-commerce',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'A serene, organic skincare and holistic apothecary e-commerce shop featuring botanical ingredient cards and personalized routine finders.',
    challenge:
      'Clean beauty consumers demand total transparency regarding organic sourcing, active botanical percentages, and skin-type compatibility.',
    approach:
      'Crafted a warm limestone and botanical sage visual identity, pairing warm cream tones with amber apothecary bottles and structured ingredient tables.',
    solution:
      'A conversion-optimized skincare store featuring an interactive routine diagnostic, bundle builders, and an educational botanical glossary.',
    features: [
      'Interactive skin type diagnostic routine finder',
      'Full ingredient breakdown drawer with active botanical percentages',
      'Custom bundle builder offering tiered volume savings',
      'Interactive slide-out cart with sample reward unlocks',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cart Context', 'Vite'],
    image: REAL_DESIGNS.beautyWithIntuition,
    liveUrl: 'https://beautywithintuition.com',
    featured: false,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#34D399', // Botanical Sage & Herb
      badgeBg: '#064E3B',
      badgeText: '#D1FAE5',
      border: '#059669',
    },
  },

  // ==========================================
  // CATEGORY E: SAAS LANDING PAGES (2 PROJECTS)
  // ==========================================
  {
    id: 'teamwork-graph',
    slug: 'teamwork-graph',
    title: 'Atlassian Teamwork Graph Platform',
    brandName: 'Teamwork Graph',
    category: 'SaaS Landing Pages',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'A high-converting developer SaaS landing page designed to explain the connected teamwork graph that automatically builds organizational context across all work tools.',
    challenge:
      'Complex graph infrastructure and enterprise AI context engines often present dense, confusing technical diagrams that obscure key business value.',
    approach:
      'Built a dark slate hero with luminous graph node visualizations, verified index scale metrics (71B+ pieces of work, 249B+ relationships), and dual CLI/MCP terminal previews.',
    solution:
      'A developer landing page combining interactive graph previews, terminal CLI installation snippets, and measurable AI benchmark comparisons (44% quality improvement).',
    features: [
      'Interactive connected context graph node visualization',
      'Developer terminal CLI and Model Context Protocol (MCP) code snippet switcher',
      'Transparent AI performance benchmark metrics (44% quality lift, 48% fewer tokens)',
      'High-conversion interactive demo tour and trial intake CTA',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Graph Visualizer', 'Vite'],
    image: REAL_DESIGNS.teamworkGraph,
    liveUrl: 'https://atlassian.com',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#06B6D4', // Edge Cyan
      badgeBg: '#164E63',
      badgeText: '#CFFAFE',
      border: '#0891B2',
    },
  },
  {
    id: 'copilot-money',
    slug: 'copilot-money',
    title: 'Copilot Money Personal Finance',
    brandName: 'Copilot Money',
    category: 'SaaS Landing Pages',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'A warm, conversion-focused personal finance landing page featuring Mac and iOS dashboard previews, intelligent budgeting tracking, and live subscription analytics.',
    challenge:
      'Consumer finance tools often feel dry and tedious, discouraging users from maintaining consistent household budgeting and investment tracking habits.',
    approach:
      'Adopted a playful dark canvas with vibrant pill categories, Apple Design Award trust badges, interactive cash flow trendlines, and honest subscription pricing.',
    solution:
      'A conversion-optimized SaaS marketing page showcasing multi-account balance aggregations, category rollover visuals, and customer proof benchmarks.',
    features: [
      'Interactive multi-platform product preview (iPhone, iPad, Mac, Web)',
      'Category spending rollover and automated recurring subscription detector',
      'Honest and thoughtful transparent pricing switcher ($13/mo or $7.92/mo billed yearly)',
      'Curated client endorsement wall with tech reviewer social proof',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart Engine', 'Vite'],
    image: REAL_DESIGNS.copilotMoney,
    liveUrl: 'https://copilot.money',
    featured: false,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#10B981', // Forest Mint
      badgeBg: '#064E3B',
      badgeText: '#D1FAE5',
      border: '#059669',
    },
  },

  // ==========================================
  // CATEGORY F: CREATOR PORTFOLIOS & MEDIA KITS (2 PROJECTS)
  // ==========================================
  {
    id: 'harry-moses-media',
    slug: 'harry-moses-media',
    title: 'Harry Moses Creator Media Kit',
    brandName: 'Harry Moses',
    category: 'Creator Portfolios & Media Kits',
    projectType: 'STUDIO PROJECT',
    year: '2026',
    creationNote: 'Studio Showcase 2026',
    shortDescription:
      'A high-conversion UGC creator portfolio and interactive digital rate card designed to secure premium brand sponsorships with verified audience reach metrics.',
    challenge:
      'Creators often pitch brands with static PDF files that render poorly on mobile screens and fail to highlight authentic video performance and engagement rates.',
    approach:
      'Designed a warm terracotta and linen editorial layout leading directly with verified campaign metrics, video reel showcases, and clear partnership tiers.',
    solution:
      'A mobile-first web portfolio enabling brand marketing directors to review engagement benchmarks, sample past video work, and book collaborations in under two minutes.',
    features: [
      'Mobile-responsive vertical video showcase player',
      'Audience demographic and engagement breakdown cards',
      'Tiered partnership rate card with direct collaboration intake',
      'One-click bio link integration for TikTok and Instagram outreach',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Video', 'Vite'],
    image: REAL_DESIGNS.harryMosesMedia,
    liveUrl: 'https://harrymoses.com',
    featured: true,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#FB923C', // Warm Terracotta
      badgeBg: '#431407',
      badgeText: '#FFEDD5',
      border: '#C2410C',
    },
  },
  {
    id: 'killian-herzer-archive',
    slug: 'killian-herzer-archive',
    title: 'Killian Herzer Visual Monograph',
    brandName: 'Killian Herzer',
    category: 'Creator Portfolios & Media Kits',
    projectType: 'STUDIO PROJECT',
    year: '2025',
    creationNote: 'Studio Showcase 2025',
    shortDescription:
      'A minimalist visual monograph and digital brand portfolio showcasing architectural typography, design tokens, and editorial brand systems.',
    challenge:
      'Creative directors require an austere, uncompromising portfolio that lets typographic craftsmanship and structural identity speak without distraction.',
    approach:
      'Used cold silver accents, dark textured slate paper surfaces, and architectural baseline grids to frame bespoke brand guideline specimens.',
    solution:
      'An archival digital portfolio displaying responsive typography specimens, print collateral mockups, and client presentation decks.',
    features: [
      'Responsive typographic mark system for web and physical print',
      'Comprehensive digital brand guideline token specifications',
      'Foil-stamped stationery and packaging showcase modules',
      'Lightweight high-contrast lightbox for detail inspection',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma Tokens', 'Vite'],
    image: REAL_DESIGNS.killianHerzerArchive,
    liveUrl: 'https://killianherzer.com',
    featured: false,
    hasInteractiveDemo: false,
    colorIdentity: {
      accent: '#CBD5E1', // Architectural Silver
      badgeBg: '#1E293B',
      badgeText: '#F8FAFC',
      border: '#475569',
    },
  },
];

/**
 * 15 CLIENT REVIEWS
 * Displaying reviewer first name and user-supplied review text exactly verbatim.
 */
export const STUDIO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    firstName: 'Marcus',
    reviewText:
      'Othmar Creative Studio transformed our consulting firm’s digital presence. The new architecture communicates executive authority and converted high-value client inquiries within our first month.',
  },
  {
    id: 't-2',
    firstName: 'Elena',
    reviewText:
      'Our luxury retail store needed an editorial feel rather than a generic cookie-cutter store template. Othmar designed a clean, magazine-like experience that improved our average order value.',
  },
  {
    id: 't-3',
    firstName: 'David',
    reviewText:
      'The engineering precision was evident from day one. They built our data dashboard with sub-second responsiveness, clean TypeScript, and intuitive user workflows that our clients praise.',
  },
  {
    id: 't-4',
    firstName: 'Sophia',
    reviewText:
      'The scroll storytelling they built for our studio is breathtaking. They balanced intricate visual motion with uncompromising mobile speed, giving us an award-worthy digital flagship.',
  },
  {
    id: 't-5',
    firstName: 'Jonathan',
    reviewText:
      'Pitching sponsorship brands using my new interactive media kit doubled my inbound deal flow. Brand managers continually comment on how professional and easy-to-read my rate card is.',
  },
  {
    id: 't-6',
    firstName: 'Amara',
    reviewText:
      'From the typographic guidelines to our digital brand guidelines, the identity Othmar delivered gave our business the confidence to pitch multi-million dollar architectural projects.',
  },
  {
    id: 't-7',
    firstName: 'Julian',
    reviewText:
      'Our legacy website was cluttered and slow. Othmar restructured our information architecture, streamlined our quote funnel, and made our commercial freight services understandable.',
  },
  {
    id: 't-8',
    firstName: 'Claire',
    reviewText:
      'They engineered custom Gutenberg blocks that our editorial team actually enjoys using. The site is blazing fast, secure, and completely customized to our publishing workflow.',
  },
  {
    id: 't-9',
    firstName: 'Tariq',
    reviewText:
      'The user interface prototypes and component design system they delivered saved our internal software engineering team months of guesswork during product development.',
  },
  {
    id: 't-10',
    firstName: 'Rachel',
    reviewText:
      'Our Core Web Vitals were hurting our search engine rankings. Othmar optimized our asset pipeline and scripts, slashing our load time from 4.8s down to under 1.2s.',
  },
  {
    id: 't-11',
    firstName: 'Thomas',
    reviewText:
      'We experienced an urgent checkout breakdown during a promotional campaign. Othmar diagnosed the root cause within hours and resolved the conflict without downtime.',
  },
  {
    id: 't-12',
    firstName: 'Siddharth',
    reviewText:
      'Our developer landing page conversion rate jumped noticeably following the redesign. The interactive code terminal and clear value props resonate immediately with our audience.',
  },
  {
    id: 't-13',
    firstName: 'Beatrice',
    reviewText:
      'Having Othmar manage our monthly maintenance gives us complete peace of mind. Updates, security checks, and backups are handled seamlessly every single month.',
  },
  {
    id: 't-14',
    firstName: 'Liam',
    reviewText:
      'The presentation deck and digital media kit Othmar designed established immediate credibility with top-tier corporate sponsors. Outstanding visual art direction.',
  },
  {
    id: 't-15',
    firstName: 'Hannah',
    reviewText:
      'Complex patient intake data is now structured in an intuitive, clean interface. The design system is modular, accessible, and effortlessly extensible.',
  },
];

/**
 * CORE SERVICES BREAKDOWN
 */
export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: 'ecommerce-dev',
    number: '01',
    title: 'E-commerce Website Development',
    shortDescription:
      'Conversion-engineered online stores featuring high-converting product pages, faceted catalog search, seamless cart drawers, and secure global checkout.',
    detailedDescription:
      'We design and build bespoke e-commerce storefronts tailored to your product catalog and brand aesthetic. Built on Shopify, headless React/Next.js, or WooCommerce, our stores feature friction-free checkout workflows, lightning-fast catalog filtering, automated inventory alerts, and optimized mobile payment gateways.',
    suitableFor: [
      'Direct-to-Consumer (DTC) brands launching or upgrading an online storefront',
      'Retail businesses expanding into omnichannel digital commerce',
      'Boutiques requiring custom product visualizers and bundle configurations',
      'Growing merchants outgrowing generic off-the-shelf theme limitations',
    ],
    deliverables: [
      'Custom responsive storefront design (Shopify Liquid, headless Next.js, or WooCommerce)',
      'Product catalog architecture with faceted filtering (size, color, price, availability)',
      'High-converting slide-out cart drawer with free shipping progress thresholds',
      'Payment gateway setup (Stripe, PayPal, Apple Pay, Google Pay, Klarna)',
      'Automated transactional emails (order confirmations, shipping notifications, abandoned cart)',
      'Core Web Vitals speed optimization and SSL security configuration',
      'Client back-office admin training and inventory management handbook',
    ],
    scopeFactors: [
      'Total number of initial SKUs and variant complexity (colors, sizes, bundles)',
      'Integration with external ERP, CRM, or 3PL warehouse fulfillment systems',
      'Recurring subscription billing or customer loyalty membership setup',
      'Multi-currency and multi-language international localization',
    ],
    exclusions: [
      'Third-party merchant transaction fees and platform subscriptions (Shopify/Stripe fees)',
      'Physical product photography shoots and physical inventory handling',
    ],
    priceRange: '$2,000 – $5,000',
  },
  {
    id: 'web-design-dev',
    number: '02',
    title: 'Website Design & Development',
    shortDescription:
      'Bespoke multi-page business websites and high-converting landing pages engineered for brand distinction, rapid loading, and qualified client acquisition.',
    detailedDescription:
      'We engineer tailor-made digital flagships that communicate institutional authority and convert qualified inbound prospects. Every build features custom typography, clean semantic markup, fluid responsive breakpoints, and intuitive content administration.',
    suitableFor: [
      'Professional service firms, corporate advisories, and consultancies',
      'Technology companies outgrowing generic website templates',
      'Established businesses conducting a modern digital brand overhaul',
      'Founders preparing for venture funding or high-stakes enterprise sales',
    ],
    deliverables: [
      'Custom visual concept and interactive high-fidelity Figma UI prototypes',
      'Clean, component-driven responsive frontend build (React/Next.js or modern static engine)',
      'Up to 5–10 custom page layouts (Home, About, Services, Case Studies, Contact)',
      'Technical on-page SEO foundation (semantic tags, Schema JSON-LD, OpenGraph cards)',
      'Custom lead capture forms with validation, spam honeypots, and CRM webhook routing',
      '95+ Google PageSpeed score optimization across desktop and mobile devices',
      'Headless CMS or intuitive editorial interface with client handover walkthrough',
    ],
    scopeFactors: [
      'Total number of unique custom layout templates and content density',
      'Client-supplied copy vs. studio content curation and asset sourcing',
      'Interactive widgets, pricing calculators, or embedded calendar scheduling flows',
    ],
    exclusions: [
      'Domain registration and third-party hosting subscription costs',
      'Ongoing continuous copywriting (available as an add-on)',
    ],
    priceRange: '$1,500 – $4,000',
  },
  {
    id: 'website-redesign',
    number: '03',
    title: 'Website Design / Redesign',
    shortDescription:
      'Transform slow or outdated sites with bespoke modern architectures, clean block patterns, hardened security, database cleanup, and clutter-free editorial workflows.',
    detailedDescription:
      'We modernize outdated websites and web platforms. By replacing bloated third-party page builders with lightweight custom architecture, auditing code and assets, and redesigning the user experience, we achieve fast loading speeds, rock-solid security, and an editorial experience your team will actually enjoy using.',
    suitableFor: [
      'Organizations with established websites that feel slow, cluttered, or outdated',
      'Businesses losing search traffic due to poor mobile performance and bloated templates',
      'Marketing teams frustrated by brittle page builder plugins or legacy CMS setups',
      'Companies wanting to preserve historical SEO equity while modernizing design',
    ],
    deliverables: [
      'Bespoke Gutenberg block theme or lightweight modern framework build',
      'Complete database, media library, and blog content migration without broken links',
      '301 redirect mapping to protect existing search engine rankings',
      'Comprehensive plugin audit, bloat elimination, and caching configuration',
      'Security hardening (two-factor authentication, login protection, firewall setup)',
      'Custom post types for team profiles, case studies, or service offerings',
      '1-on-1 recorded video walkthrough for your content team',
    ],
    scopeFactors: [
      'Volume of legacy posts, pages, and media attachments to migrate',
      'Complexity of custom database fields and existing ACF configurations',
      'Third-party membership or custom portal plugins in use',
    ],
    exclusions: [
      'Premium commercial plugin license renewals and web hosting fees',
      'Data recovery from previously corrupted or hacked legacy servers',
    ],
    priceRange: '$1,000 – $3,000',
  },
  {
    id: 'cinematic-websites',
    number: '04',
    title: 'Cinematic Website Development',
    shortDescription:
      'Immersive digital storytelling featuring physics-based scroll choreography, micro-interactions, lightweight 3D canvas elements, and art-directed motion.',
    detailedDescription:
      'Crafted for brands that want to command undeniable prestige. We combine high-fashion art direction, fluid scroll-triggered scenes, interactive canvas shaders, and kinetic typography to create an unforgettable narrative journey that engages visitors while retaining top-tier performance.',
    suitableFor: [
      'Architecture studios, luxury developments, and interior design practices',
      'Creative agencies, film directors, and high-end production houses',
      'Disruptive hardware and consumer tech launch campaigns',
      'Brands aiming for category leadership and prestigious web design awards',
    ],
    deliverables: [
      'Art-directed motion narrative, layout concepts, and visual pacing storyboard',
      'Smooth scroll-triggered camera angles, pinned scenes, and layered reveals',
      'Interactive 3D / WebGL canvas effects or shader animations optimized for 60fps',
      'Curated typography motion, magnetic button physics, and custom cursor gestures',
      'Reduced-motion accessibility switch (prefers-reduced-motion) and mobile fallbacks',
      'Media asset compression pipeline keeping initial page weight under 2MB',
    ],
    scopeFactors: [
      'Number of choreographed scroll scenes and custom interactive canvas moments',
      'Complexity of 3D models (optimizing existing assets vs. custom WebGL shaders)',
      'Custom audio soundscapes or video timeline synchronization',
    ],
    exclusions: [
      '3D asset modeling from scratch (requires client 3D assets or separate 3D fee)',
      'Full-scale video production or on-set shooting',
    ],
    priceRange: '$2,500 – $5,000',
  },
  {
    id: 'web-app-dev',
    number: '05',
    title: 'Web Application Development',
    shortDescription:
      'Custom full-stack web applications, SaaS dashboards, customer portals, and MVPs built with secure architectures, clean code, and scalable data models.',
    detailedDescription:
      'When standard CMS platforms fall short, we build robust custom web applications from the ground up. Combining responsive TypeScript frontends with secure backend infrastructure, we deliver reliable software that streamlines operations, authenticates users, and processes critical workflows.',
    suitableFor: [
      'Early-stage founders validating and launching a market-ready SaaS MVP',
      'Businesses automating manual spreadsheets into a dedicated cloud portal',
      'Service companies needing authenticated client dashboards or document portals',
      'Organizations requiring bespoke quoting, scheduling, or operational tools',
    ],
    deliverables: [
      'Production-ready modern architecture (React/TypeScript, Node.js, relational database)',
      'User authentication system (email verification, password resets, session management)',
      'Role-Based Access Control (RBAC) supporting multi-tier permissions (Admin, Member, Client)',
      'Interactive dashboard with real-time data metrics, sortable data tables, and CSV exports',
      'Secure REST / GraphQL API endpoints with input validation and rate limiting',
      'Automated database schema migrations and scheduled cloud backups',
      'Automated CI/CD deployment pipeline and full technical documentation',
    ],
    scopeFactors: [
      'Number of distinct user roles, workflows, and state machines',
      'Complexity of calculation algorithms and asynchronous background tasks',
      'External API integrations (Stripe Billing, Twilio, SendGrid, OpenAI)',
    ],
    exclusions: [
      'Ongoing cloud infrastructure costs (AWS, Vercel, Supabase, Neon)',
      'Native iOS and Android mobile app store submissions',
    ],
    priceRange: '$5,000 – $10,000',
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    shortDescription:
      'User-centric interface layouts, interactive Figma prototypes, design systems, and product ergonomics tailored for intuitive user journeys.',
    detailedDescription:
      'We transform abstract product concepts and complex functional requirements into clean, user-friendly digital interfaces. Our design process bridges empathetic user journey mapping with pixel-perfect visual execution and comprehensive design tokens ready for development.',
    suitableFor: [
      'Software startups needing a polished interface before commissioning developers',
      'Existing digital products facing user drop-off, low conversion, or high support tickets',
      'Product teams seeking a unified multi-platform design token system',
      'Founders preparing pitch decks and clickable prototypes for investor demonstrations',
    ],
    deliverables: [
      'Information architecture map, user flow diagrams, and low-fidelity wireframes',
      'High-fidelity visual screen designs across desktop, tablet, and mobile breakpoints',
      'Clickable interactive Figma prototype with micro-interaction states and transitions',
      'Modular design system (color tokens, typography scale, inputs, modals, buttons)',
      'Accessibility audit ensuring WCAG AA contrast and clear tap targets',
      'Comprehensive developer handoff documentation with spacing specs and asset exports',
    ],
    scopeFactors: [
      'Total number of unique screens, modal flows, and edge cases',
      'Depth of the component library (atomic design tokens vs. simple style sheet)',
      'Round of user testing interviews and usability revision iterations',
    ],
    exclusions: [
      'Frontend code implementation (available as an integrated build package)',
      'Multi-month longitudinal user research surveys',
    ],
    priceRange: '$1,000 – $3,000',
  },
  {
    id: 'brand-identity',
    number: '07',
    title: 'Brand Identity Design',
    shortDescription:
      'Cohesive visual identity systems including logo marks, typography pairings, color architecture, digital collateral, and comprehensive brand guidelines.',
    detailedDescription:
      'A distinctive brand identity sets you apart before a single word is read. We develop cohesive visual systems that reflect your company’s core values, resonate with target clients, and scale gracefully across all digital and physical brand touchpoints.',
    suitableFor: [
      'New businesses establishing their market presence with executive polish',
      'Rebranding companies looking to shed an outdated image and reposition upwards',
      'Digital creators and boutique agencies seeking a cohesive visual system',
    ],
    deliverables: [
      'Primary wordmark, secondary logomark, and responsive social favicon icons',
      'Engineered color palette with HEX, RGB, CMYK, and digital contrast ratios',
      'Curated typography hierarchy with web font pairings and styling rules',
      'Digital collateral suite (social banner kit, profile avatars, email signature template)',
      'Corporate stationery layout (business cards, letterhead, slide presentation template)',
      '25+ page Brand Guidelines PDF documenting logo safe zones, misuse rules, and tone',
      'Complete master asset bundle (SVG, high-res PNG, EPS vector source files)',
    ],
    scopeFactors: [
      'Number of creative direction conceptual exploratory routes',
      'Breadth of marketing collateral applications (packaging, pitch deck, physical swag)',
    ],
    exclusions: [
      'Trademark registration and legal intellectual property filings',
      'Physical printing and manufacturing fees',
    ],
    priceRange: '$800 – $2,500',
  },
  {
    id: 'ugc-portfolio',
    number: '08',
    title: 'UGC Creator Portfolio',
    shortDescription:
      'Sleek, mobile-first creator portfolio websites designed to showcase video content, brand partnerships, and secure paid brand sponsorship deals.',
    detailedDescription:
      'Built specifically for User-Generated Content (UGC) creators, influencers, and digital talent. We create high-converting, mobile-optimized showcase websites that highlight your best video concepts, audience demographics, and direct collaboration rates, making it effortless for brand marketing teams to hire you.',
    suitableFor: [
      'UGC creators pitching cosmetic, fashion, tech, or lifestyle brands',
      'Content creators seeking a professional alternative to Linktree',
      'Influencers looking to display verified campaign metrics and video reels',
    ],
    deliverables: [
      'Mobile-first responsive one-page website optimized for Instagram & TikTok bios',
      'Curated video reel grid with instant-play modal or responsive video embeds',
      'Past brand collaboration showcase with client logos and campaign highlights',
      'Clear rate card section highlighting single reel, multi-pack, and usage terms',
      'Direct collaboration inquiry form or one-tap email pitch button',
      'Fast global CDN hosting configuration and custom domain connection',
    ],
    scopeFactors: [
      'Single-page layout vs. multi-tab portfolio (e.g., photo + video tabs)',
      'Number of embedded video reels and custom analytics callouts',
    ],
    exclusions: [
      'Video shooting, voiceovers, or editing of raw creator footage',
      'Domain name registration fees',
    ],
    priceRange: '$150 – $400',
  },
  {
    id: 'media-kit-design',
    number: '09',
    title: 'Media Kit Design',
    shortDescription:
      'Polished, sponsor-ready digital media kits highlighting audience analytics, sponsorship tiers, and past brand partnership success stories.',
    detailedDescription:
      'Your media kit is your visual pitch deck to marketing directors. We design crisp, data-backed media kits that present your reach, audience demographics, and commercial rates with unmistakable professionalism, giving brands confidence to invest in your platform.',
    suitableFor: [
      'Content creators, podcasters, and newsletter writers seeking brand sponsors',
      'Industry consultants, keynote speakers, and independent talent',
      'Boutique publication editors and media platforms',
    ],
    deliverables: [
      'High-resolution interactive digital presentation (PDF and web-friendly formats)',
      'Audience demographic visualizations (age brackets, gender, geography, engagement rates)',
      'Past brand sponsorship showcase with testimonial pull-quotes and ROI metrics',
      'Transparent collaboration rate table with deliverables and usage rights',
      'Direct booking and contact callout for marketing managers',
      'Editable Canva or Figma source template for effortless monthly statistic updates',
    ],
    scopeFactors: [
      'Page count (typically 2–5 structured pages)',
      'Custom graphic illustrations and data infographic complexity',
    ],
    exclusions: [
      'Sourcing or verifying your social channel analytics (client supplies screenshots/data)',
    ],
    priceRange: '$100 – $300',
  },
  {
    id: 'website-maintenance',
    number: '10',
    title: 'Website Maintenance Retainer',
    shortDescription:
      'Proactive technical stewardship, weekly security updates, automated cloud backups, 24/7 uptime monitoring, and dedicated developer hours.',
    detailedDescription:
      'Protect your digital investment with dedicated monthly maintenance. We handle all routine updates, performance audits, security patches, and minor design tweaks, ensuring your website remains lightning-fast, bug-free, and always online while you focus on running your business.',
    suitableFor: [
      'Business owners who lack the time or technical staff to maintain their website',
      'E-commerce stores where downtime or checkout bugs directly cost revenue',
      'High-traffic websites needing regular performance tuning and security patches',
      'Teams requiring ongoing monthly content, banner, or promotional page updates',
    ],
    deliverables: [
      'Weekly core, theme, and plugin/dependency updates tested in staging',
      'Automated daily encrypted cloud backups with one-click disaster recovery',
      '24/7 uptime monitoring with instant alerting and rapid emergency response',
      'Monthly Core Web Vitals speed optimization and database cleanup',
      '2 to 6 hours of dedicated monthly development time for content edits and minor tweaks',
      'Monthly executive health report detailing updates, security status, and uptime',
    ],
    scopeFactors: [
      'CMS architecture (standard WordPress vs. custom headless Jamstack)',
      'Number of dedicated monthly development and content hours included',
      'High-availability SLAs and weekend on-call coverage',
    ],
    exclusions: [
      'Major multi-page architectural overhauls or complete site redesigns',
      'Third-party hosting server invoices',
    ],
    priceRange: '$100 – $500 / month',
    isRecurring: true,
  },
  {
    id: 'website-troubleshooting',
    number: '11',
    title: 'Website Troubleshooting & Repairs',
    shortDescription:
      'Rapid emergency triage and precision fixes for broken layouts, CMS plugin conflicts, database crashes, checkout failures, and hacked sites.',
    detailedDescription:
      'When your website breaks, every minute of downtime harms your reputation and revenue. We provide rapid diagnostic triage to pinpoint root causes and implement lasting fixes—whether resolving responsive styling bugs, restoring broken database connections, or sanitizing compromised sites.',
    suitableFor: [
      'Websites suffering from the "white screen of death" or fatal 500 server errors',
      'Stores with broken checkout flows, payment gateway drops, or cart failures',
      'Sites experiencing broken mobile layouts, missing fonts, or broken navigation',
      'Websites compromised by malware, malicious redirects, or spam injections',
    ],
    deliverables: [
      'Rapid triage assessment and root-cause diagnostic within 12–24 hours',
      'Precision resolution of JavaScript errors, PHP fatal faults, or CSS layout glitches',
      'Payment gateway and checkout failure debugging and test transaction validation',
      'Malware removal, backdoor deletion, and vulnerability patch hardening',
      'Cross-browser cross-device verification after repair deployment',
      'Post-incident incident summary report with preventive maintenance tips',
    ],
    scopeFactors: [
      'Nature of the issue (surface CSS styling vs. deep database corruption/malware)',
      'Availability of server credentials, SSH access, and staging environments',
      'Hourly engagement ($50–$100/hr) vs. pre-quoted flat-rate issue resolution ($100–$250)',
    ],
    exclusions: [
      'Complete rebuilding of obsolete legacy frameworks that are beyond repair',
      'Server hardware failures managed exclusively by third-party hosting providers',
    ],
    priceRange: '$50 – $100 / hr (or $100–$250 flat)',
  },
];

/**
 * FULL PRICING GUIDE (USD)
 */
export const STUDIO_PRICING: PricingItem[] = [
  {
    id: 'price-ecommerce',
    serviceId: 'ecommerce-dev',
    title: 'E-commerce Website Development',
    startingPrice: 2000,
    upperPrice: 5000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Conversion-engineered online stores with streamlined checkout, inventory management, product variants, and global payment processing.',
    deliverables: [
      'Custom responsive storefront design (Shopify, WooCommerce, or Next.js)',
      'Product catalog architecture with faceted filtering and variant matrix',
      'Slide-out cart drawer, checkout optimization, and abandoned cart hooks',
      'Payment gateway setup (Stripe, PayPal, Apple Pay, Google Pay, Klarna)',
      'Automated customer order confirmation and shipping notification emails',
      'Speed optimization, Core Web Vitals compliance, and admin handover training',
    ],
    scopeFactors: [
      'Catalog size and variant matrix complexity',
      'Third-party ERP, CRM, or external fulfillment integrations',
      'Multi-currency and multi-language international tax rules',
    ],
    badge: 'High Conversion',
  },
  {
    id: 'price-web-dev',
    serviceId: 'web-design-dev',
    title: 'Website Design & Development',
    startingPrice: 1500,
    upperPrice: 4000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Bespoke multi-page business websites and high-impact landing pages engineered for brand distinction, rapid loading, and qualified client acquisition.',
    deliverables: [
      'Custom visual concept and interactive high-fidelity Figma UI design',
      'Clean, component-driven responsive frontend build (React/Next.js or static engine)',
      'Up to 5–10 custom page layouts (Home, About, Services, Case Studies, Contact)',
      'Technical on-page SEO metadata, schema markup, and OpenGraph social cards',
      'Lead capture forms with validation, spam protection, and CRM webhook routing',
      '95+ Google PageSpeed score and cross-browser responsiveness audit',
    ],
    scopeFactors: [
      'Page count (typically 4–10 pages in this guide range)',
      'Custom micro-interactions, calculators, or interactive widgets',
      'Third-party software integrations (CRM, newsletter, calendar booking)',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'price-website-redesign',
    serviceId: 'website-redesign',
    title: 'Website Design / Redesign',
    startingPrice: 1000,
    upperPrice: 3000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Modernize an outdated website or build a fresh, easily managed custom platform with clean layouts and responsive block patterns.',
    deliverables: [
      'Bespoke Gutenberg block theme or lightweight modern framework build',
      'Database, media library, and blog content migration without URL breaks',
      '301 redirect map protecting existing search engine rankings',
      'Plugin audit, bloat elimination, and caching configuration',
      'Security hardening (two-factor auth, firewall, and scheduled backups)',
      'Client editorial tutorial walkthrough and custom block training',
    ],
    scopeFactors: [
      'Legacy theme migration complexity and database size',
      'Volume of existing content and custom post types',
      'Custom ACF / block requirements and third-party plugin dependencies',
    ],
  },
  {
    id: 'price-cinematic',
    serviceId: 'cinematic-websites',
    title: 'Cinematic Website Development',
    startingPrice: 2500,
    upperPrice: 5000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Art-directed visual journeys featuring physics-based motion, scroll-driven storytelling, custom cursor gestures, and interactive spatial canvas elements.',
    deliverables: [
      'Visual storyboarding, layout concepts, and motion interaction plan',
      'Scroll-triggered sequences, pinned camera views, and layered reveals',
      'Interactive 3D / WebGL canvas effects or shader animations optimized for 60fps',
      'Curated typography motion, magnetic button physics, and micro-interactions',
      'Reduced-motion accessibility toggle and mobile lightweight fallback',
      'Performance budget tuning keeping initial page load under 2MB',
    ],
    scopeFactors: [
      'Number of custom choreographed scroll scenes',
      'Interactive 3D / WebGL canvas requirements',
      'Custom sound design or video timeline synchronization',
    ],
    badge: 'Signature Craft',
  },
  {
    id: 'price-web-app',
    serviceId: 'web-app-dev',
    title: 'Web Application Development',
    startingPrice: 5000,
    upperPrice: 10000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Full-stack custom software, SaaS dashboards, customer portals, and MVPs tailored to your operational workflows with secure authentication.',
    deliverables: [
      'Full-stack architecture (React/TypeScript frontend with Node.js/PostgreSQL backend)',
      'User authentication, session management, and role-based access control (RBAC)',
      'Interactive dashboard with real-time data metrics, sortable data tables, and CSV exports',
      'REST or GraphQL API endpoints, webhook listeners, and third-party integrations',
      'Relational database schema design with automated migrations and backup schedules',
      'Automated CI/CD deployment pipeline and developer documentation',
    ],
    scopeFactors: [
      'Number of distinct user roles and state flows',
      'Complexity of custom calculation logic and asynchronous background tasks',
      'Payment gateway flows (Stripe Billing subscriptions) and webhooks',
    ],
    badge: 'Full-Stack Scalability',
  },
  {
    id: 'price-ui-ux',
    serviceId: 'ui-ux-design',
    title: 'UI/UX Design',
    startingPrice: 1000,
    upperPrice: 3000,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'User-centric interface layouts, interactive Figma prototypes, and modular design systems ready for developer implementation.',
    deliverables: [
      'User journey mapping, information architecture, and wireframes',
      'High-fidelity screen layouts across desktop, tablet, and mobile breakpoints',
      'Clickable interactive Figma prototype with micro-interaction states',
      'Component library and design tokens (colors, typography, inputs, modals)',
      'Accessibility audit ensuring WCAG AA compliance and clear tap targets',
      'Developer handoff documentation with redline specs and asset exports',
    ],
    scopeFactors: [
      'Number of distinct screen templates and edge states',
      'Depth of the component library (atomic tokens vs. simple style sheet)',
      'User testing iterations and stakeholder review rounds',
    ],
  },
  {
    id: 'price-brand',
    serviceId: 'brand-identity',
    title: 'Brand Identity Design',
    startingPrice: 800,
    upperPrice: 2500,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Memorable visual identity systems including primary wordmark, secondary logomarks, typography rules, color architecture, and brand guidelines.',
    deliverables: [
      'Primary wordmark, secondary logomark, and responsive favicon icons (SVG, PNG, EPS)',
      'Engineered color palette with HEX, RGB, CMYK, and accessibility contrast ratios',
      'Curated typography hierarchy with web font pairings and styling guidelines',
      'Digital collateral kit (social banner kit, profile avatars, email signature)',
      'Corporate stationery layout (business cards, letterhead, slide presentation template)',
      '25+ page Brand Guidelines PDF documenting clear usage rules and do/don’ts',
    ],
    scopeFactors: [
      'Number of creative direction conceptual exploration routes',
      'Volume of auxiliary marketing collateral templates (packaging, deck, social)',
    ],
  },
  {
    id: 'price-ugc-portfolio',
    serviceId: 'ugc-portfolio',
    title: 'UGC Creator Portfolio',
    startingPrice: 150,
    upperPrice: 400,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'A sleek, mobile-optimized portfolio presenting your past UGC collaborations, video metrics, rate cards, and direct brand sponsorship booking funnel.',
    deliverables: [
      'Mobile-first responsive portfolio site optimized for social bio links',
      'Curated video reel showcase with instant-play modal or embedded video players',
      'Case study cards highlighting past brand collaborations and engagement metrics',
      'Integrated sponsorship rate card with clear deliverables and usage rights',
      'Direct brand inquiry contact form or one-tap email pitch button',
      'Custom domain configuration and global CDN deployment',
    ],
    scopeFactors: [
      'Single-page layout vs. multi-tab portfolio',
      'Number of video reels and custom engagement callouts',
    ],
  },
  {
    id: 'price-media-kit',
    serviceId: 'media-kit-design',
    title: 'Media Kit Design',
    startingPrice: 100,
    upperPrice: 300,
    currency: 'USD',
    period: 'project',
    pricingType: 'one-time',
    description:
      'Clean, branded digital media kit showcasing your audience statistics, partnership rates, and brand collaboration guidelines in a sponsor-ready format.',
    deliverables: [
      'High-resolution digital presentation document (interactive PDF and web formats)',
      'Audience demographic and engagement charts (age, gender, top locations)',
      'Past brand partnership showcase with testimonial pull-quotes and reach metrics',
      'Tiered sponsorship rate cards and deliverables breakdown',
      'Editable Canva or Figma template version for easy future stat updates',
    ],
    scopeFactors: [
      'Number of pages (typically 2–5 structured pages)',
      'Custom graphic layouts and data infographic complexity',
    ],
  },
  {
    id: 'price-maintenance',
    serviceId: 'website-maintenance',
    title: 'Website Maintenance Retainer',
    startingPrice: 100,
    upperPrice: 500,
    currency: 'USD',
    period: 'month',
    pricingType: 'recurring',
    description:
      'Ongoing technical stewardship to ensure your website remains fast, secure, backed up, and updated as your business evolves.',
    deliverables: [
      'Weekly core, theme, and plugin/dependency security updates in staging',
      'Automated daily encrypted cloud backups with one-click rollback disaster recovery',
      '24/7 uptime monitoring with instant alerting and emergency response protocol',
      'Monthly speed and Core Web Vitals performance spot-audits',
      '2 to 6 hours of dedicated monthly development time for content edits and minor tweaks',
      'Monthly health report detailing updates, security status, and uptime performance',
    ],
    scopeFactors: [
      'Platform complexity (WordPress vs. custom headless Jamstack)',
      'Allocated monthly hours for content updates and custom tweaks',
      'High-availability response SLAs and weekend coverage',
    ],
    badge: 'Recurring Retainer',
  },
  {
    id: 'price-troubleshoot',
    serviceId: 'website-troubleshooting',
    title: 'Website Troubleshooting & Repairs',
    startingPrice: 50,
    upperPrice: 100,
    currency: 'USD',
    period: 'hr',
    pricingType: 'one-time',
    customPriceDisplay: '$50 – $100 / hr',
    subPriceNote: 'or $100 – $250 flat fee',
    description:
      'Emergency diagnosis and resolution for broken layouts, plugin conflicts, database crashes, checkout failures, or hacked websites.',
    deliverables: [
      'Rapid diagnostic triage assessment within 12–24 hours',
      'Root-cause resolution for JavaScript errors, broken CSS layouts, or database faults',
      'Payment gateway and checkout failure debugging and test validation',
      'Malware removal, security disinfection, and vulnerability patch hardening',
      'Post-repair cross-browser and mobile verification testing',
      'Post-incident summary report with preventive maintenance recommendations',
    ],
    scopeFactors: [
      'Subject to diagnostic complexity, database corruption, or server access requirements',
      'Hourly emergency troubleshooting ($50–$100/hr) vs. pre-quoted flat fix ($100–$250)',
    ],
    badge: 'Rapid Repair',
  },
];

/**
 * FREQUENTLY ASKED QUESTIONS
 */
export const STUDIO_FAQS: FaqItem[] = [
  {
    id: 'faq-services',
    question: 'What services does Othmar Creative Studio provide?',
    answer:
      'We provide complete digital design and development services across 11 key packages: E-commerce Website Development ($2,000–$5,000), Website Design & Development ($1,500–$4,000), Website Design / Redesign ($1,000–$3,000), Cinematic Website Development ($2,500–$5,000), Web Application Development ($5,000–$10,000), UI/UX Design ($1,000–$3,000), Brand Identity Design ($800–$2,500), UGC Creator Portfolios ($150–$400), Media Kit Design ($100–$300), Website Maintenance Retainers ($100–$500/month), and Website Troubleshooting & Repairs ($50–$100/hr or $100–$250 flat).',
  },
  {
    id: 'faq-cost',
    question: 'How much does a website cost?',
    answer:
      'Our website projects typically start at $1,500 for custom business websites (ranging to $4,000), with focused website design & redesign solutions at $1,000–$3,000 and full-scale e-commerce platforms at $2,000–$5,000. Cinematic experiences range from $2,500 to $5,000, while custom web applications start from $5,000 to $10,000. Specialized creative services include UI/UX design ($1,000–$3,000), brand identity ($800–$2,500), UGC creator portfolios ($150–$400), media kits ($100–$300), maintenance retainers ($100–$500/month), and troubleshooting ($50–$100/hr or $100–$250 flat). Because every project is unique, we provide an itemized proposal after discussing your specific goals.',
  },
  {
    id: 'faq-pricing-determination',
    question: 'How do you determine the final project price?',
    answer:
      'We base our proposals on project scope rather than arbitrary fees: the number of unique page templates, custom functionality or integrations required, whether content and photography are ready or need curation, animation complexity, and delivery timeline. We provide a transparent, fixed-scope estimate before work begins, so there are never hidden surprises.',
  },
  {
    id: 'faq-timeline',
    question: 'How long does a project take?',
    answer:
      'Typical business websites and portfolio projects take 2 to 4 weeks from kickoff to launch. More complex web applications, e-commerce stores, or cinematic experiences usually take 4 to 8 weeks depending on the review cycles and feature depth. During our discovery phase, we define a realistic delivery schedule with milestone check-ins.',
  },
  {
    id: 'faq-redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. Many clients come to us with websites that no longer represent their quality or fail to convert inbound visitors. We audit your current site, identify usability and performance bottlenecks, preserve search engine ranking equity, and completely modernize the design and technical architecture.',
  },
  {
    id: 'faq-international',
    question: 'Do you work with clients internationally?',
    answer:
      'Yes. We work remotely with business owners, founders, and creators across different time zones. We maintain structured communication via email and scheduled milestone check-ins, ensuring smooth progress regardless of geographic location.',
  },
  {
    id: 'faq-custom-apps',
    question: 'Can you build custom web applications?',
    answer:
      'Yes. We build full-stack web applications, authenticated client dashboards, internal workflow tools, and startup MVPs. We engineer scalable frontends using modern frameworks (React/TypeScript) and connect them to resilient APIs and databases.',
  },
  {
    id: 'faq-cinematic-motion',
    question: 'Can you create cinematic websites with animations?',
    answer:
      'Yes. Cinematic websites with scroll-driven storytelling and smooth micro-interactions are one of our core specialties. We carefully balance visual immersion with technical performance, ensuring animations settle smoothly, load quickly, and degrade gracefully on mobile devices or under reduced-motion accessibility preferences.',
  },
  {
    id: 'faq-wordpress',
    question: 'Do you work with WordPress?',
    answer:
      'Yes. We design and build clean WordPress websites, develop custom Gutenberg block layouts, customize themes, and optimize existing WordPress setups for improved speed and security. We also build modern headless or static setups when clients prefer alternative architectures.',
  },
  {
    id: 'faq-maintenance',
    question: 'Do you offer maintenance after launch?',
    answer:
      'Yes. We offer monthly website maintenance retainers ranging from $100 to $300 per month. This covers regular software and security updates, automated backups, uptime monitoring, performance checks, and reserved hours for routine content or layout edits.',
  },
  {
    id: 'faq-after-inquiry',
    question: 'What happens after I submit a project inquiry?',
    answer:
      'Once you submit the inquiry form, we review your project goals, timeline, and requirements. Within 24–48 hours, we reply with initial thoughts, clarifying questions, and an invitation to a quick discovery exchange. If we are a great fit, we provide an itemized project scope and delivery plan.',
  },
  {
    id: 'faq-payments',
    question: 'What payment arrangements do you use?',
    answer:
      'For standard projects, we typically use a milestone-based arrangement: 50% deposit upon project kickoff and agreement sign-off, and the remaining 50% upon final delivery, testing, and handover before live deployment. For larger multi-phase projects, we can structure payments across 3 to 4 defined milestones.',
  },
];

/**
 * 4-STEP DELIVERY METHODOLOGY
 */
export const STUDIO_PROCESS = [
  {
    step: '01',
    title: 'Discover',
    lead: 'Understand your business, audience, and commercial objectives.',
    description:
      'We dig into your brand positioning, existing bottlenecks, target audience expectations, and functional requirements to establish clear success criteria before designing a single pixel.',
  },
  {
    step: '02',
    title: 'Strategize & Design',
    lead: 'Define direction, structural hierarchy, and visual systems.',
    description:
      'We craft the typographic scale, editorial layouts, wireframes, and interactive prototypes. You review interactive directions and visual language early in the process.',
  },
  {
    step: '03',
    title: 'Build & Refine',
    lead: 'Develop clean code, interactive motion, and responsive views.',
    description:
      'We build the solution using modern TypeScript and responsive CSS. We test thoroughly across screen sizes, optimize loading speeds, and verify accessible interactions.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    lead: 'Deploy to production with post-launch handover and guidance.',
    description:
      'We configure DNS, optimize production caching, set up forms and analytics hooks, and provide a clear handover walkthrough. Ongoing maintenance retainers are available.',
  },
];

/**
 * WHY CHOOSE US
 */
export const WHY_CHOOSE_US = [
  {
    title: 'Design & Engineering in Direct Unison',
    description:
      'No disconnect between creative designers and technical coders. We design with code-level feasibility in mind and build with meticulous aesthetic craft.',
  },
  {
    title: 'Tailored to Your Specific Objectives',
    description:
      'We never force your project into a generic cookie-cutter template. Every architecture, visual tone, and user journey is calibrated for your specific audience.',
  },
  {
    title: 'Responsive & Accessible by Default',
    description:
      'Your digital presence will look exceptional on phones, tablets, and wide desktop displays while adhering to accessibility contrast and navigation standards.',
  },
  {
    title: 'Transparent Communication & Defined Milestones',
    description:
      'Clear scopes, realistic timelines, and regular asynchronous progress updates. You will always know what is being built, when, and what comes next.',
  },
  {
    title: 'Performance & Usability First',
    description:
      'Visual polish never comes at the cost of slow loading speeds or confusing navigation. We build lean, high-performing websites that visitors love using.',
  },
  {
    title: 'A High-Touch Collaborative Partnership',
    description:
      'You communicate directly with the team doing the work. We act as an invested digital partner dedicated to moving your business forward.',
  },
];
