import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { Eye, Target, Globe, Heart, Leaf, Star, ArrowRight } from 'lucide-react';

const VisionPage: React.FC = () => {
  const visionPillars = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Universidad Saludable",
      description: "Promovemos el bienestar integral de nuestra comunidad universitaria",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universidad Solidaria",
      description: "Fomentamos la colaboración y el apoyo mutuo en todos nuestros proyectos",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Universidad Sostenible",
      description: "Comprometidos con el desarrollo sostenible y el cuidado del medio ambiente",
      color: "bg-green-100 text-green-600"
    }
  ];

  const objectives = [
    {
      title: "Referente Nacional",
      description: "Ser reconocidos como líderes en RSU a nivel nacional",
      progress: 75
    },
    {
      title: "Proyección Internacional",
      description: "Expandir nuestro impacto a nivel internacional",
      progress: 60
    },
    {
      title: "Innovación Social",
      description: "Desarrollar soluciones innovadoras para problemas sociales",
      progress: 80
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Eye className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visión</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Nuestra proyección hacia el futuro como universidad comprometida con la responsabilidad social
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Vision Statement */}
        <Card className="p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800">Nuestra Visión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Al año 2030 llegar a ser una universidad saludable, solidaria y sostenible y ser referentes de 
                Responsabilidad Social universitaria a nivel nacional e internacional.
              </p>
              <Badge variant="outline" className="text-purple-600 border-purple-600">
                Horizonte 2030
              </Badge>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=University%20vision%20future%20sustainable%20healthy%20solidarity%20academic%20excellence%20modern%20campus&image_size=landscape_4_3" 
                alt="Visión DRSU" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </Card>

        {/* Vision Pillars */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pilares de Nuestra Visión</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los tres pilares fundamentales que guían nuestro camino hacia el 2030
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionPillars.map((pillar, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center mb-4`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <Card className="p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Objetivos Estratégicos</h2>
            <p className="text-gray-600">
              Metas clave para alcanzar nuestra visión al 2030
            </p>
          </div>

          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{objective.title}</h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </div>
                  <Badge variant="secondary">{objective.progress}%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${objective.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Impact Areas */}
        <Card className="p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Áreas de Impacto</h2>
            <p className="text-gray-600">
              Sectores donde proyectamos generar mayor transformación social
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Educación", icon: "🎓", description: "Formación integral y de calidad" },
              { title: "Salud", icon: "🏥", description: "Bienestar comunitario" },
              { title: "Medio Ambiente", icon: "🌱", description: "Sostenibilidad ambiental" },
              { title: "Desarrollo Social", icon: "🤝", description: "Inclusión y equidad" }
            ].map((area, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <Star className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Únete a Nuestra Visión</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Sé parte de la transformación hacia una universidad más saludable, solidaria y sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/noticias">
              <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300">
                Conoce Nuestros Proyectos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-purple-600">
                Contáctanos
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VisionPage;
