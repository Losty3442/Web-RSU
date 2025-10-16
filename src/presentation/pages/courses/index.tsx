import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { GraduationCap, Calendar, Clock, User, Users, BookOpen, Award, CheckCircle, Loader, ArrowRight } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Taller Virtual «Fundamentos de Responsabilidad Social Universitaria»",
      description: "Continuando con el desarrollo del Plan de Capacitación Docente UNP 2023, te invitamos a participar en el taller virtual sobre Fundamentos de Responsabilidad Social Universitaria dirigido a los Docentes de la UNP.",
      category: "Formación Básica",
      instructor: "Dr. Manuel Eduardo Burgos Cabrejos",
      dates: "Del 17 al 25 de Julio",
      schedule: "01, 03, 05, 10, 15 y 25 de Agosto",
      target: "Docentes UNP",
      status: "virtual",
      statusText: "Virtual",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20professors%20in%20virtual%20classroom%20learning%20about%20social%20responsibility%20modern%20educational%20setting&image_size=landscape_4_3",
      type: "Taller"
    },
    {
      id: 2,
      title: "Metodología ESU para Proyectos de Responsabilidad Social",
      description: "Curso especializado en la aplicación de metodologías de Educación Superior Universitaria (ESU) para el diseño, implementación y evaluación de proyectos sociales con impacto comunitario.",
      category: "Metodología",
      duration: "40 horas académicas",
      modality: "Modalidad Asincrónica",
      certification: "Certificación incluida",
      status: "completed",
      statusText: "Finalizado",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20students%20working%20on%20social%20projects%20methodology%20books%20and%20planning%20materials&image_size=landscape_4_3",
      type: "Curso"
    },
    {
      id: 3,
      title: "Capacitación en Gestión de Voluntariado Universitario",
      description: "Programa de formación para líderes de brigadas voluntarias, enfocado en el desarrollo de competencias para la organización, coordinación y seguimiento de actividades solidarias.",
      category: "Voluntariado",
      schedule: "Sábados 9:00 AM - 1:00 PM",
      dates: "Próximas fechas",
      target: "Estudiantes y voluntarios",
      status: "ongoing",
      statusText: "Inscripciones abiertas",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20volunteers%20training%20session%20teamwork%20community%20service%20leadership%20development&image_size=landscape_4_3",
      type: "Capacitación"
    }
  ];

  const stats = [
    { label: "Cursos Disponibles", value: "12+", icon: BookOpen, color: "text-blue-600" },
    { label: "Participantes", value: "500+", icon: Users, color: "text-green-600" },
    { label: "Horas de Formación", value: "200+", icon: Clock, color: "text-purple-600" },
    { label: "Certificaciones", value: "300+", icon: Award, color: "text-yellow-600" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'virtual': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Formación Básica': return 'bg-blue-100 text-blue-800';
      case 'Metodología': return 'bg-green-100 text-green-800';
      case 'Voluntariado': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'ongoing': return Loader;
      default: return BookOpen;
    }
  };

  const getButtonText = (status: string) => {
    switch (status) {
      case 'completed': return 'Ver material';
      case 'ongoing': return 'Inscribirme';
      default: return 'Más información';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <GraduationCap className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cursos y Talleres
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Formación especializada en Responsabilidad Social Universitaria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <BookOpen className="h-4 w-4 mr-2" />
                Ver Catálogo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="h-4 w-4 mr-2" />
                Inscripciones
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => {
              const StatusIcon = getStatusIcon(course.status);
              return (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">
                        <Award className="h-3 w-3 mr-1" />
                        {course.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(course.status)}>
                        {course.statusText}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge className={getCategoryColor(course.category)}>
                        <BookOpen className="h-3 w-3 mr-1" />
                        {course.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {course.instructor && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="h-4 w-4" />
                          <span>{course.instructor}</span>
                        </div>
                      )}
                      {course.dates && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{course.dates}</span>
                        </div>
                      )}
                      {course.schedule && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{course.schedule}</span>
                        </div>
                      )}
                      {course.duration && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      {course.target && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{course.target}</span>
                        </div>
                      )}
                      {course.certification && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Award className="h-4 w-4" />
                          <span>{course.certification}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="h-4 w-4 text-gray-500" />
                        <Badge variant="outline" className={getStatusColor(course.status)}>
                          {course.statusText}
                        </Badge>
                      </div>
                      <Button size="sm" className="ml-auto">
                        {getButtonText(course.status)}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Modalidades de Estudio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Virtual:</strong> Clases en línea con horarios flexibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Presencial:</strong> Talleres prácticos en campus universitario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Híbrida:</strong> Combinación de sesiones virtuales y presenciales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Asincrónica:</strong> Contenido disponible 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Beneficios de la Formación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Certificación oficial de la Universidad Nacional de Piura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Desarrollo de competencias en responsabilidad social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Networking con profesionales del área</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Acceso a recursos y materiales especializados</span>
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

export default CoursesPage;
