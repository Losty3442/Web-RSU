import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { Book, Download, FileText, Scale, Users, Target, CheckCircle, AlertCircle } from 'lucide-react';

const RegulationsPage: React.FC = () => {
  const regulations = [
    {
      id: 1,
      title: "Reglamento General de Responsabilidad Social Universitaria",
      description: "Marco normativo principal que establece los lineamientos generales para la implementación de la RSU en la universidad.",
      version: "v2.1",
      date: "2023",
      status: "Vigente",
      type: "Principal",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Reglamento de Voluntariado Universitario",
      description: "Normas específicas para la participación de estudiantes y personal en actividades de voluntariado.",
      version: "v1.3",
      date: "2023",
      status: "Vigente",
      type: "Específico",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Reglamento de Proyectos de Impacto Social",
      description: "Directrices para la formulación, ejecución y evaluación de proyectos con impacto social.",
      version: "v1.0",
      date: "2022",
      status: "Vigente",
      type: "Específico",
      downloadUrl: "#"
    }
  ];

  const chapters = [
    {
      number: "I",
      title: "Disposiciones Generales",
      articles: 8,
      description: "Objeto, ámbito de aplicación, definiciones y principios fundamentales"
    },
    {
      number: "II",
      title: "Organización y Estructura",
      articles: 12,
      description: "Órganos responsables, funciones y competencias institucionales"
    },
    {
      number: "III",
      title: "Programas y Actividades",
      articles: 15,
      description: "Tipos de programas, metodologías y criterios de implementación"
    },
    {
      number: "IV",
      title: "Participación y Voluntariado",
      articles: 10,
      description: "Modalidades de participación, derechos y deberes de los voluntarios"
    },
    {
      number: "V",
      title: "Evaluación y Seguimiento",
      articles: 6,
      description: "Indicadores, métodos de evaluación y reportes de impacto"
    },
    {
      number: "VI",
      title: "Disposiciones Finales",
      articles: 4,
      description: "Vigencia, modificaciones y disposiciones transitorias"
    }
  ];

  const principles = [
    { title: "Compromiso Social", description: "Responsabilidad con el desarrollo sostenible de la comunidad" },
    { title: "Participación Activa", description: "Involucramiento de toda la comunidad universitaria" },
    { title: "Transparencia", description: "Gestión abierta y rendición de cuentas" },
    { title: "Calidad Académica", description: "Excelencia en la formación y el servicio" },
    { title: "Innovación Social", description: "Desarrollo de soluciones creativas a problemas sociales" },
    { title: "Sostenibilidad", description: "Enfoque de largo plazo y respeto al medio ambiente" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Vigente': return 'bg-green-100 text-green-800';
      case 'En Revisión': return 'bg-yellow-100 text-yellow-800';
      case 'Derogado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Principal': return 'bg-blue-100 text-blue-800';
      case 'Específico': return 'bg-purple-100 text-purple-800';
      case 'Complementario': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Book className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reglamento RSU
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Marco normativo que regula las actividades de responsabilidad social universitaria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open('/documents/reglamento-rsu.pdf', '_blank')}>
                <Download className="h-4 w-4 mr-2" />
                Descargar Reglamento
              </Button>
              <Link to="/reglamento">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 bg-white/10">
                  <FileText className="h-4 w-4 mr-2" />
                  Ver Índice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Principles Section */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-blue-600" />
                  Principios Fundamentales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {principles.map((principle, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg mb-2 text-blue-900">{principle.title}</h3>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chapters Structure */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  Estructura del Reglamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {chapters.map((chapter, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 text-indigo-800 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            {chapter.number}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{chapter.title}</h3>
                            <Badge variant="outline" className="mt-1">
                              {chapter.articles} artículos
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{chapter.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regulations List */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-green-600" />
                  Documentos Normativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {regulations.map((regulation) => (
                    <div key={regulation.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-lg text-gray-900">{regulation.title}</h3>
                        <div className="flex gap-2">
                          <Badge className={getTypeColor(regulation.type)}>
                            {regulation.type}
                          </Badge>
                          <Badge className={getStatusColor(regulation.status)}>
                            {regulation.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{regulation.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Versión: {regulation.version}</span>
                          <span>Año: {regulation.date}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Ámbito de Aplicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Estudiantes de pregrado y posgrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Personal docente y administrativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Autoridades universitarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Organizaciones aliadas y colaboradoras</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  Objetivos Principales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Establecer el marco institucional para la RSU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Definir roles y responsabilidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Promover la participación activa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Garantizar la calidad y el impacto social</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsPage;
