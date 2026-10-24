export type ProjectCategory =
  | 'All Projects'
  | 'Business Websites'
  | 'Cinematic & Premium Websites'
  | 'Web Applications & SaaS Dashboards'
  | 'E-commerce'
  | 'SaaS Landing Pages'
  | 'Creator Portfolios & Media Kits';

export type ProjectType = 'STUDIO PROJECT';

export interface ProjectColorIdentity {
  accent: string;       // Primary distinct accent for this project (NOT electric lime)
  badgeBg: string;      // Background for project tag/badge
  badgeText: string;    // Text color for project tag/badge
  border: string;       // Border tone matching project aesthetic
}

export interface Project {
  id: string;
  title: string;
  brandName: string;
  slug: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  projectType: ProjectType;
  shortDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  galleryImages?: string[];
  liveUrl?: string;
  demoUrl?: string;
  hasInteractiveDemo?: boolean;
  outcome?: string;
  featured: boolean;
  year: '2025' | '2026';
  creationNote?: string;
  colorIdentity: ProjectColorIdentity;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  suitableFor: string[];
  deliverables: string[];
  scopeFactors: string[];
  exclusions: string[];
  priceRange: string;
  isRecurring?: boolean;
}

export interface PricingItem {
  id: string;
  serviceId: string;
  title: string;
  startingPrice: number;
  upperPrice?: number;
  currency: string;
  period?: 'project' | 'month' | 'starting' | 'hr';
  pricingType: 'one-time' | 'recurring';
  customPriceDisplay?: string;
  subPriceNote?: string;
  description: string;
  scopeFactors: string[];
  deliverables: string[];
  badge?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  placeholderInitials: string;
  status: 'Confirmed Team Member';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StudioStat {
  id: string;
  label: string;
  displayValue: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  verified: boolean;
  placeholderNote?: string;
}

export interface TestimonialItem {
  id: string;
  firstName: string;
  reviewText: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  websiteUrl: string;
  service: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  additionalRequirements: string;
  consentPrivacy: boolean;
}
