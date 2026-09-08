export interface WeddingCouple {
  groom: string;
  bride: string;
  displayNames: string; // e.g. "Mansi & Darshan"
  tagline: string;
  heroSubtext: string;
  invitationText: string;
}

export interface WeddingDates {
  startDate: string; // "25 November 2026"
  endDate: string; // "26 November 2026"
  countdownTarget: string; // ISO 8601 target with timezone
  timezone: string; // "Asia/Kolkata"
  displayDates: string; // "25 — 26 NOVEMBER 2026"
}

export interface WeddingVenue {
  name: string;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  googleMapsUrl: string;
  embedMapQuery: string;
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  day: string; // "25 Nov" or "26 Nov"
  dayNumber: 1 | 2;
  period: 'Morning' | 'Afternoon' | 'Evening';
  person?: string; // "Darshan" | "Mansi"
  subtitle?: string;
  description: string;
  theme: 'sacred-gold' | 'vibrant-festive' | 'nocturne-glow' | 'serene-blessings' | 'royal-climax';
  image: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Us' | 'The Celebrations' | 'Family & Friends' | 'The Wedding';
  orientation: 'portrait' | 'landscape' | 'square';
  caption?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

export interface WeddingConfig {
  couple: WeddingCouple;
  wedding: WeddingDates;
  venue: WeddingVenue;
  story: {
    heading: string;
    quote: string[];
    chapters: Array<{
      title: string;
      subtitle: string;
      text: string;
      image?: string;
    }>;
  };
  events: WeddingEvent[];
  gallery: {
    heading: string;
    categories: Array<'All' | 'Us' | 'The Celebrations' | 'Family & Friends' | 'The Wedding'>;
    images: GalleryImage[];
  };
  cinematicVideo: {
    heading: string;
    subheading: string;
    videoUrl?: string;
    posterImage: string;
  };
  family: {
    heading: string;
    subheading: string;
    mansiFamilyTitle: string;
    mansiFamilyMembers: string[];
    darshanFamilyTitle: string;
    darshanFamilyMembers: string[];
  };
  rsvp: {
    heading: string;
    subheading: string;
    googleFormUrl: string; // Google Form URL for RSVP
    events: Array<{
      id: string;
      name: string;
      date: string;
      period: string;
    }>;
    attendanceOptions: string[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  share: {
    heading: string;
    subheading: string;
    title: string;
    text: string;
    url: string;
  };
  audio: {
    enabled: boolean;
    title: string;
    audioUrl?: string;
  };
}
