import type { NavigationItem, FeatureCard, VolunteerType } from './types';

// Navegación principal
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    href: '/',
    icon: 'Home'
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    href: '/nosotros',
    icon: 'Users',
    children: [
      { id: 'que-es-rsu', label: '¿Qué es RSU?', href: '/what-is-rsu' },
      { id: 'mision', label: 'Misión', href: '/mission' },
      { id: 'vision', label: 'Visión', href: '/vision' },
      { id: 'ubicacion', label: 'Ubicación', href: '/location' },
      { id: 'equipo', label: 'Equipo DRSU', href: '/team' },
      { id: 'alianzas', label: 'Alianzas Estratégicas', href: '/alianzas' }
    ]
  },
  {
    id: 'documentos-gestion',
    label: 'Documentos de Gestión',
    href: '/documentos-gestion',
    icon: 'FolderOpen',
    children: [
      { id: 'reconocimiento', label: 'Reconocimiento', href: '/reconocimiento' },
      { id: 'reglamento', label: 'Reglamento RSU', href: '/reglamento' },
      { id: 'poi', label: 'POI-RSU', href: '/poi' }
    ]
  },
  {
    id: 'herramientas',
    label: 'Herramientas',
    href: '/herramientas',
    icon: 'Wrench',
    children: [
      { id: 'cursos', label: 'Cursos', href: '/cursos' },
      { id: 'videos', label: 'Videos', href: '/videos' },
      { id: 'presentaciones', label: 'Presentaciones', href: '/presentaciones' }
    ]
  },
  {
    id: 'actividades',
    label: 'Actividades',
    href: '/actividades',
    icon: 'Calendar',
    children: [
      { id: 'viii-enarsu', label: 'VIII ENARSU', href: '/actividades/viii-enarsu' },
      { id: 'actividades-rsu', label: 'Actividades RSU', href: '/actividades/actividades-rsu' },
      { id: 'iniciativas-drsu', label: 'Iniciativas DRSU', href: '/actividades/iniciativas-drsu' },
      { id: 'proyectos-drsu', label: 'Proyectos DRSU', href: '/actividades/proyectos-drsu' }
    ]
  },
  {
    id: 'noticias',
    label: 'Noticias',
    href: '/noticias',
    icon: 'Newspaper'
  },
  {
    id: 'voluntariado',
    label: 'Voluntariado',
    href: '/voluntariado',
    icon: 'Heart'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '/contacto',
    icon: 'Mail'
  }
];

// Iconos del sidebar
export const SIDEBAR_ICONS = [
  { id: 'home', icon: 'Home', href: '/', tooltip: 'Inicio' },
  { id: 'nosotros', icon: 'Users', href: '/what-is-rsu', tooltip: 'Nosotros' },
  { id: 'documentos', icon: 'FolderOpen', href: '/reconocimiento', tooltip: 'Documentos de Gestión' },
  { id: 'herramientas', icon: 'Wrench', href: '/cursos', tooltip: 'Herramientas' },
  { id: 'actividades', icon: 'Calendar', href: '/actividades', tooltip: 'Actividades' },
  { id: 'voluntariado', icon: 'Heart', href: '/voluntariado', tooltip: 'Voluntariado' },
  { id: 'newspaper', icon: 'Newspaper', href: '/noticias', tooltip: 'Noticias' },
  { id: 'contacto', icon: 'Mail', href: '/contacto', tooltip: 'Contacto' }
];

// Características principales (¿Qué hacemos?)
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'formacion',
    title: 'Formación Profesional',
    description: 'Desarrollo de competencias profesionales con responsabilidad social',
    icon: 'Briefcase',
    color: 'bg-blue-500'
  },
  {
    id: 'investigacion',
    title: 'Investigación',
    description: 'Investigación aplicada para el desarrollo sostenible',
    icon: 'Search',
    color: 'bg-green-500'
  },
  {
    id: 'vinculo',
    title: 'Vínculo con el entorno',
    description: 'Conexión directa con la comunidad y sus necesidades',
    icon: 'Users',
    color: 'bg-purple-500'
  },
  {
    id: 'gestion',
    title: 'Gestión Institucional',
    description: 'Administración responsable y transparente',
    icon: 'Settings',
    color: 'bg-orange-500'
  }
];

// Tipos de voluntariado
export const VOLUNTEER_TYPES: VolunteerType[] = [
  {
    id: 'educativo',
    title: 'Voluntariado Educativo',
    description: 'Apoyo en programas educativos y de capacitación',
    icon: 'GraduationCap',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'ambiental',
    title: 'Voluntariado Ambiental',
    description: 'Participación en proyectos de conservación ambiental',
    icon: 'Leaf',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'social',
    title: 'Voluntariado Social',
    description: 'Trabajo directo con comunidades vulnerables',
    icon: 'Heart',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'salud',
    title: 'Voluntariado en Salud',
    description: 'Apoyo en programas de salud comunitaria',
    icon: 'Stethoscope',
    color: 'bg-pink-100 text-pink-800'
  }
];

// Colores del tema
export const THEME_COLORS = {
  primary: '#071A40',
  secondary: '#0A2A5E',
  accent: '#1E5EFF',
  success: '#28A745',
  warning: '#FFC107',
  danger: '#DC3545',
  dark: '#262627',
  light: '#F8F9FA',
  white: '#FFFFFF'
};

// Información de contacto
export const CONTACT_INFO = {
  address: 'Ciudad Universitaria, Urb. Miraflores s/n, Castilla - Piura',
  phone: '+51 073 285132',
  email: 'rsu@unp.edu.pe',
  hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
  socialMedia: {
    facebook: 'https://facebook.com/unp.edu.pe',
    twitter: 'https://twitter.com/unp_oficial',
    instagram: 'https://instagram.com/unp_oficial'
  }
};