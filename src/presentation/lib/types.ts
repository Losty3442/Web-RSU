// Tipos para la aplicación DRSU

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  status: 'active' | 'completed' | 'planned';
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface VolunteerType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Alliance {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'ppt';
  url: string;
  size: string;
  date: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Tipos para Supabase
export interface NewsDB {
  id: string;
  title: string;
  content: string;
  summary: string | null;
  image_url: string | null;
  author: string | null;
  published_at: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  user_id: string | null;
}

export interface DocumentDB {
  id: string;
  title: string;
  description: string | null;
  type: 'WEB' | 'DOCUMENT' | 'VIDEO' | 'IMAGE';
  link: string | null;
  section: 'DOCUMENTS' | 'TOOLS' | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  user_id: string | null;
}

export interface User {
  id: string;
  email: string;
}

// Tipos para formularios
export interface NewsFormData {
  title: string;
  content: string;
  summary: string;
  image_url: string;
  author: string;
}

export interface DocumentFormData {
  title: string;
  description: string;
  type: 'WEB' | 'DOCUMENT' | 'VIDEO' | 'IMAGE';
  link: string;
  section: 'DOCUMENTS' | 'TOOLS';
}