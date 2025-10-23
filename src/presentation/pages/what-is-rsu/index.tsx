import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { HelpCircle, Building, GraduationCap, Search, Users, Target, Eye, MapPin, UserCheck} from 'lucide-react';

interface ImpactQuadrant {
  title: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}


const WhatIsRsuPage: React.FC = () => {
  const impactQuadrants: ImpactQuadrant[] = [
    {
      title: "Impactos organizacionales",
      items: ["Económicos", "Laborales", "Ambientales"],
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Impactos educativos",
      items: ["Formación académica"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Impactos cognitivos",
      items: ["Investigación", "Epistemología"],
      icon: <Search className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Impactos sociales",
      items: ["Extensión", "Transferencia", "Participación social"],
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Qué es RSU?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conoce el concepto y los impactos de la Responsabilidad Social Universitaria
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Definition Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Definición de Responsabilidad Social Universitaria
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-500">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "La Responsabilidad Social Universitaria busca reunir a la Universidad en la sociedad atendiendo sus cuatro procesos: <strong>Gestión, Docencia, Investigación y Extensión</strong>, con la misión universitaria, sus valores y compromiso social. Esta Responsabilidad se realiza mediante una autoreflexión institucional transparente con participación dialógica de toda la comunidad universitaria y los múltiples sectores sociales, interesados en el buen desempeño universitario o afectados por él, y persigue la transformación efectiva del ejercicio del saber en la sociedad, hacia la solución de los problemas de <strong>Exclusión, inequidad e insostenibilidad</strong>."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RSU Diagram Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Responsabilidad Social Universitaria
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              4 Impactos que las universidades generan en el entorno
            </p>
          </div>

          {/* Central RSU Circle */}
          <div className="relative mb-12">
            <div className="flex justify-center mb-8">
              <Card className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Responsabilidad Social Universitaria
                  </h3>
                  <div className="text-4xl font-bold mb-2">RSU</div>
                  <p className="text-sm text-blue-100">
                    4 Impactos que las universidades generan en el entorno
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Quadrants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactQuadrants.map((quadrant, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${quadrant.color} rounded-full mb-4 text-white`}>
                      {quadrant.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {quadrant.title}
                    </h3>
                    <ul className="space-y-1">
                      {quadrant.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Fuente: Ph.D. Francois Vallaeys
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conoce más sobre nosotros
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Explora nuestra misión, visión y más información sobre la DRSU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/mission" className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 text-white">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Misión
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nuestro propósito y compromiso con la sociedad
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/vision" className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4 text-white">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Visión
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nuestra aspiración y futuro deseado
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/location" className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4 text-white">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dónde encontrarnos y cómo llegar
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/team" className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 text-white">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Equipo DRSU
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Conoce a nuestro equipo de trabajo
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default WhatIsRsuPage;
