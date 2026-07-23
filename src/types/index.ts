export interface ServiceCategory {
  id: string;
  title: string;
  titleAr?: string;
  shortDesc: string;
  shortDescAr?: string;
  fullDesc: string;
  fullDescAr?: string;
  iconName: string;
  maxDepth?: string;
  maxDepthAr?: string;
  deliveryMethods: string[];
  deliveryMethodsAr?: string[];
  keyCapabilities: string[];
  keyCapabilitiesAr?: string[];
  equipmentList: string[];
  equipmentListAr?: string[];
  caseStudy?: {
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    impact: string;
    impactAr?: string;
  };
  datasheetUrl?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  titleAr?: string;
  entity: 'Cape Diving' | 'TAG Diving' | 'AMS Mauritius' | 'AMS Ghana' | 'AMS Port Services' | 'AMS Mozambique' | 'AMS Marine KSA';
  description: string;
  descriptionAr?: string;
  badge?: string;
  badgeAr?: string;
}

export interface TechPartner {
  name: string;
  nameAr?: string;
  tagline: string;
  taglineAr?: string;
  description: string;
  descriptionAr?: string;
  technologies: string[];
  technologiesAr?: string[];
  keySolutions: {
    name: string;
    specs: string;
  }[];
}

export interface AccreditationItem {
  id: string;
  title: string;
  titleAr?: string;
  category: 'ISO' | 'IMCA' | 'IRATA' | 'Class Approval';
  issuer: string;
  issuerAr?: string;
  imageSrc?: string;
  scope: string;
  scopeAr?: string;
}

export interface ClientItem {
  name: string;
  nameAr?: string;
  logoSrc: string;
  category: 'National Energy' | 'International Oil Major' | 'EPC & Maritime';
}

export interface LocationHub {
  id: string;
  city: string;
  cityAr?: string;
  country: string;
  countryAr?: string;
  type: 'Headquarters' | 'Strategic KSA Hub' | 'GCC Regional Operations';
  typeAr?: string;
  address: string;
  addressAr?: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}
