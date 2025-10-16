import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { ClipboardList, Download, FileText, Calendar, Target, Users, TrendingUp } from 'lucide-react';

const PoiPage: React.FC = () => {
  const poiObjectives = [
    {
      id: 1,
      title: "Fortalecimiento Institucional",
      description: "Consolidar la estructura organizacional de la DRSU para una gestión eficiente de la responsabilidad social universitaria.",
      progress: 85,
      status: "En progreso",
      priority: "Alta"
    },
    {
      id: 2,
      title: "Desarrollo de Programas RSU",
      description: "Implementar programas innovadores que generen impacto positivo en la comunidad universitaria y sociedad.",
      progress: 70,
      status: "En progreso",
      priority: "Alta"
    },
    {
      id: 3,
      title: "Capacitación y Formación",
      description: "Desarrollar competencias en responsabilidad social en estudiantes, docentes y personal administrativo.",
      progress: 60,
      status: "En progreso",
      priority: "Media"
    },
    {
      id: 4,
      title: "Alianzas Estratégicas",
      description: "Establecer convenios con organizaciones públicas y privadas para ampliar el impacto de las acciones RSU.",
      progress: 45,
      status: "Planificado",
      priority: "Media"
    }
  ];

  const keyIndicators = [
    { label: "Programas Activos", value: "12", icon: Target, color: "text-blue-600" },
    { label: "Beneficiarios", value: "2,500+", icon: Users, color: "text-green-600" },
    { label: "Proyectos Completados", value: "8", icon: TrendingUp, color: "text-purple-600" },
    { label: "Alianzas Establecidas", value: "15", icon: FileText, color: "text-orange-600" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En progreso': return 'bg-blue-100 text-blue-800';
      case 'Planificado': return 'bg-yellow-100 text-yellow-800';
      case 'Completado': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <ClipboardList className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              POI-RSU
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Plan Operativo Institucional de Responsabilidad Social Universitaria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Download className="h-4 w-4 mr-2" />
                Descargar POI 2024
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="h-4 w-4 mr-2" />
                Ver Cronograma
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Indicators */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gray-100 ${indicator.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{indicator.value}</h3>
                    <p className="text-gray-600">{indicator.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Objectives */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Objetivos Estratégicos 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {poiObjectives.map((objective) => (
                      <div key={objective.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{objective.title}</h3>
                          <div className="flex gap-2">
                            <Badge className={getPriorityColor(objective.priority)}>
                              {objective.priority}
                            </Badge>
                            <Badge className={getStatusColor(objective.status)}>
                              {objective.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{objective.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progreso</span>
                            <span className="font-medium">{objective.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${objective.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Document Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Información del Documento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Versión</p>
                    <p className="font-medium">POI-RSU 2024 v1.2</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Última actualización</p>
                    <p className="font-medium">15 de Enero, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vigencia</p>
                    <p className="font-medium">Enero - Diciembre 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estado</p>
                    <Badge className="bg-green-100 text-green-800">Aprobado</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar POI Completo
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Ver Cronograma Detallado
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Reporte de Avance
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Para consultas sobre el POI-RSU, contacta con:
                  </p>
                  <p className="font-medium">Dirección de RSU</p>
                  <p className="text-sm text-gray-600">drsu2023unp@gmail.com</p>
                  <p className="text-sm text-gray-600">(073) 300357</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoiPage;
