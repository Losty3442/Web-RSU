import React from 'react';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Target, Users, BookOpen, Lightbulb, Globe, Heart } from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionPillars = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formación",
      description: "Educación integral con valores y compromiso social"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Investigación",
      description: "Generación de conocimiento para el desarrollo sostenible"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión",
      description: "Administración responsable y transparente"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Extensión",
      description: "Vinculación efectiva con la comunidad"
    }
  ];

  const values = [
    "Compromiso Social",
    "Transparencia",
    "Sostenibilidad",
    "Inclusión",
    "Excelencia Académica",
    "Responsabilidad"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestra Misión
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              El fundamento de nuestra vida universitaria orientada hacia la responsabilidad social
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Según Reglamento de Organización y Funciones - Resolución N° 0037-CU-2021
                  </Badge>
                  
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      Somos el fundamento de la vida universitaria
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Orientada a implementar y consolidar la <strong>Responsabilidad Social Universitaria</strong> en la Universidad Nacional de Piura y buscar alinear sus cuatro procesos (formación, investigación, gestión y extensión) con la misión universitaria, sus valores, el compromiso social y los <strong>Objetivos de Desarrollo Sostenible</strong>.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/equipo-drsu.jpg"
                      alt="Equipo DRSU"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20team%20working%20together%20in%20modern%20office%20environment%20professional%20diverse%20group&image_size=square_hd`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Four Pillars */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Cuatro Procesos Fundamentales
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los pilares que sustentan nuestra responsabilidad social universitaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4 group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro compromiso con la sociedad
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Badge 
                    variant="secondary" 
                    className="w-full py-2 text-sm font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                  >
                    {value}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ODS Section */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Objetivos de Desarrollo Sostenible
              </h3>
              <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
                Alineamos nuestros procesos universitarios con los ODS de las Naciones Unidas, 
                contribuyendo al desarrollo sostenible de nuestra región y del país, 
                formando profesionales comprometidos con el bienestar social y ambiental.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MissionPage;
