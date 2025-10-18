import React from 'react';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Heart, Code, Palette, Database, Smartphone, Globe, Users, Award } from 'lucide-react';

interface Developer {
  id: number;
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Ing. Edinson Nuñez More",
    role: "Líder del Proyecto",
    description: "Coordinación general, arquitectura del sistema y supervisión técnica",
    icon: <Award className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Gómez Carnero Luis Alonso",
    role: "Co-líder Principal",
    description: "Estudiante de Ingeniería Informática - Coordinación técnica y desarrollo integral",
    icon: <Code className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    name: "Castro Herrera Fermin Aldahir",
    role: "Co-líder Secundario",
    description: "Estudiante de Ingeniería Informática - Desarrollo integral y coordinación",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    name: "Morales Yabar Sofia Valentina",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y diseño",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 5,
    name: "Rivas Gutierrez David Eduardo",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y funcionalidades",
    icon: <Globe className="w-6 h-6" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 6,
    name: "Castro Villegas Pedro Ignacio",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y componentes",
    icon: <Code className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 7,
    name: "Peña Ávila Leandro Emmanuel",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y APIs",
    icon: <Database className="w-6 h-6" />,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 8,
    name: "Zapata Macalupú Cristhian",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y optimización",
    icon: <Globe className="w-6 h-6" />,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 9,
    name: "Tume Rios William Albert",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y componentes",
    icon: <Palette className="w-6 h-6" />,
    color: "from-red-500 to-red-600"
  },
  {
    id: 10,
    name: "Estrada Jimenez Yeyson Smith",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y servicios",
    icon: <Database className="w-6 h-6" />,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 11,
    name: "Herrera Chanduví José Antonio",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y funcionalidades",
    icon: <Code className="w-6 h-6" />,
    color: "from-violet-500 to-violet-600"
  },
  {
    id: 12,
    name: "Macalupú Bermejo Sebastian Eduardo",
    role: "Estudiante de Ingeniería Informática",
    description: "Desarrollo integral - Frontend, Backend y experiencia de usuario",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-rose-500 to-rose-600"
  }
];

const DeveloperCard: React.FC<{ developer: Developer }> = ({ developer }) => (
  <Card className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${developer.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
          {developer.icon}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-800 transition-colors">
            {developer.name}
          </h3>
          
          <Badge 
            variant="secondary" 
            className={`bg-gradient-to-r ${developer.color} text-white border-0 shadow-md group-hover:shadow-lg transition-all duration-300`}
          >
            {developer.role}
          </Badge>
          
          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
            {developer.description}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CreditsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        
        <div className="relative z-10 py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Equipo de Desarrollo
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Conoce al equipo de desarrollo liderado por un ingeniero y estudiantes de ingeniería informática que colaboraron en la creación de esta plataforma web
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span className="font-semibold">12 Desarrolladores</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Code className="w-5 h-5" />
                <span className="font-semibold">Tecnologías Modernas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Desarrollo con Pasión</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Desarrolladores
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo de desarrollo colaborativo liderado por un ingeniero y estudiantes de ingeniería informática apasionados por la tecnología
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Tecnologías Utilizadas</h3>
            <p className="text-gray-300 text-lg">
              Stack tecnológico moderno para una experiencia excepcional
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", color: "from-blue-400 to-blue-600" },
              { name: "TypeScript", color: "from-blue-500 to-blue-700" },
              { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
              { name: "Vite", color: "from-purple-400 to-purple-600" },
              { name: "Supabase", color: "from-green-400 to-green-600" },
              { name: "React Query", color: "from-pink-400 to-pink-600" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¡Gracias por visitar nuestra plataforma!
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Desarrollada con ❤️ por un equipo de estudiantes de ingeniería informática liderados por un ingeniero comprometido con la excelencia tecnológica
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Universidad Nacional de Piura</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Dirección de RSU</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
