import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { Award, Download, Calendar, Star, Trophy, Medal } from 'lucide-react';

const RecognitionPage: React.FC = () => {
  const recognitions = [
    {
      id: 1,
      title: "Reconocimiento Institucional RSU 2023",
      description: "Reconocimiento otorgado por el compromiso y dedicación en la implementación de programas de responsabilidad social universitaria.",
      date: "Diciembre 2023",
      category: "Institucional",
      level: "Nacional",
      status: "Vigente"
    },
    {
      id: 2,
      title: "Certificación de Calidad en Gestión RSU",
      description: "Certificación que avala la excelencia en la gestión de programas de responsabilidad social universitaria.",
      date: "Noviembre 2023",
      category: "Certificación",
      level: "Regional",
      status: "Vigente"
    },
    {
      id: 3,
      title: "Premio a la Innovación Social",
      description: "Reconocimiento por proyectos innovadores que generan impacto positivo en la comunidad.",
      date: "Octubre 2023",
      category: "Premio",
      level: "Nacional",
      status: "Vigente"
    }
  ];

  const achievements = [
    { label: "Reconocimientos Recibidos", value: "15+", icon: Award, color: "text-yellow-600" },
    { label: "Años de Trayectoria", value: "8", icon: Calendar, color: "text-blue-600" },
    { label: "Certificaciones Vigentes", value: "5", icon: Medal, color: "text-green-600" },
    { label: "Nivel de Excelencia", value: "A+", icon: Star, color: "text-purple-600" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Institucional': return 'bg-blue-100 text-blue-800';
      case 'Certificación': return 'bg-green-100 text-green-800';
      case 'Premio': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Nacional': return 'bg-red-100 text-red-800';
      case 'Regional': return 'bg-orange-100 text-orange-800';
      case 'Local': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Award className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reconocimientos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Certificaciones y reconocimientos que avalan nuestro compromiso con la responsabilidad social universitaria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100">
                <Download className="h-4 w-4 mr-2" />
                Descargar Certificados
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Trophy className="h-4 w-4 mr-2" />
                Ver Historial
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Stats */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gray-100 ${achievement.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{achievement.value}</h3>
                    <p className="text-gray-600">{achievement.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Recognition Image */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Medal className="h-5 w-5 text-yellow-600" />
                  Reconocimiento Principal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex justify-center bg-gray-50 py-8">
                  <img 
                    src="/images/reconocimiento.png" 
                    alt="Reconocimiento DRSU" 
                    className="max-w-full h-auto max-h-96 object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recognition List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    Historial de Reconocimientos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recognitions.map((recognition) => (
                      <div key={recognition.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-semibold text-lg text-gray-900">{recognition.title}</h3>
                          <div className="flex gap-2">
                            <Badge className={getCategoryColor(recognition.category)}>
                              {recognition.category}
                            </Badge>
                            <Badge className={getLevelColor(recognition.level)}>
                              {recognition.level}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{recognition.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {recognition.date}
                            </span>
                            <Badge className="bg-green-100 text-green-800">
                              {recognition.status}
                            </Badge>
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
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-blue-600" />
                  Criterios de Evaluación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Impacto social y comunitario de los programas implementados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Innovación en metodologías de responsabilidad social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Participación activa de la comunidad universitaria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Sostenibilidad y continuidad de las iniciativas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Próximos Objetivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Certificación ISO 26000 en Responsabilidad Social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Reconocimiento internacional por buenas prácticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Acreditación de programas de voluntariado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Premio nacional de innovación social universitaria</span>
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

export default RecognitionPage;
