import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { Award, Download, Calendar, Star, Medal, ExternalLink, FileText, Loader2 } from 'lucide-react';
import { useRecognitionDocuments } from '@/presentation/hooks/useDocumentQueries';

const RecognitionPage: React.FC = () => {
  const { data: recognitionDocuments, isLoading, error } = useRecognitionDocuments();

  // Calcular estadísticas dinámicas basadas en los documentos
  const totalDocuments = recognitionDocuments?.length || 0;
  const documentTypes = recognitionDocuments?.reduce((acc, doc) => {
    acc[doc.type] = (acc[doc.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};

  const achievements = [
    { label: "Documentos Disponibles", value: `${totalDocuments}`, icon: Award, color: "text-yellow-600" },
    { label: "Años de Trayectoria", value: "8", icon: Calendar, color: "text-blue-600" },
    { label: "Tipos de Documentos", value: `${Object.keys(documentTypes).length}`, icon: Medal, color: "text-green-600" },
    { label: "Nivel de Excelencia", value: "A+", icon: Star, color: "text-purple-600" }
  ];

  const getDocumentTypeColor = (type: string) => {
    switch (type) {
      case 'DOCUMENT': return 'bg-blue-100 text-blue-800';
      case 'WEB': return 'bg-green-100 text-green-800';
      case 'VIDEO': return 'bg-purple-100 text-purple-800';
      case 'IMAGE': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDocumentTypeIcon = (type: string) => {
    switch (type) {
      case 'DOCUMENT': return FileText;
      case 'WEB': return ExternalLink;
      case 'VIDEO': return ExternalLink;
      case 'IMAGE': return FileText;
      default: return FileText;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long'
    });
  };

  const handleDownload = (link: string) => {
    if (link) {
      window.open(link, '_blank');
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
              Documentos de Gestión
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Documentos oficiales y recursos de gestión que respaldan nuestro trabajo en responsabilidad social universitaria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100" onClick={() => window.open('/documents/reconocimientos.pdf', '_blank')}>
                <Download className="h-4 w-4 mr-2" />
                Descargar Documentos
              </Button>
              <Link to="/reconocimiento">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 bg-white/10">
                  <FileText className="h-4 w-4 mr-2" />
                  Ver Catálogo
                </Button>
              </Link>
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
                    <FileText className="h-5 w-5 text-yellow-600" />
                    Documentos de Gestión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-yellow-600" />
                      <span className="ml-2 text-gray-600">Cargando documentos...</span>
                    </div>
                  ) : error ? (
                    <div className="text-center py-8">
                      <p className="text-red-600 mb-4">Error al cargar los documentos</p>
                      <Button variant="outline" onClick={() => window.location.reload()}>
                        Reintentar
                      </Button>
                    </div>
                  ) : recognitionDocuments && recognitionDocuments.length > 0 ? (
                    <div className="space-y-6">
                      {recognitionDocuments.map((document) => {
                        const IconComponent = getDocumentTypeIcon(document.type);
                        return (
                          <div key={document.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="font-semibold text-lg text-gray-900">{document.title}</h3>
                              <div className="flex gap-2">
                                <Badge className={getDocumentTypeColor(document.type)}>
                                  {document.type}
                                </Badge>
                                <Badge className="bg-green-100 text-green-800">
                                  Vigente
                                </Badge>
                              </div>
                            </div>
                            {document.description && (
                              <p className="text-gray-600 mb-4">{document.description}</p>
                            )}
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(document.created_at)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <IconComponent className="h-4 w-4" />
                                  {document.type}
                                </span>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDownload(document.link || '')}
                                disabled={!document.link}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                {document.type === 'WEB' ? 'Ver' : 'Descargar'}
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No hay documentos disponibles
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Los documentos de gestión aparecerán aquí cuando estén disponibles en la base de datos.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          variant="outline" 
                          onClick={() => window.location.href = '/documentos'}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Ver Documentos
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => window.location.reload()}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Actualizar
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Document Types Summary */}
          {recognitionDocuments && recognitionDocuments.length > 0 && (
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Tipos de Documentos Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(documentTypes).map(([type, count]) => {
                      const IconComponent = getDocumentTypeIcon(type);
                      return (
                        <div key={type} className="text-center p-4 border rounded-lg">
                          <div className={`inline-flex p-3 rounded-full mb-3 ${getDocumentTypeColor(type).replace('text-', 'bg-').replace('bg-', 'bg-opacity-20 ')}`}>
                            <IconComponent className={`h-6 w-6 ${getDocumentTypeColor(type).split(' ')[1]}`} />
                          </div>
                          <h4 className="font-semibold text-sm mb-1">{type}</h4>
                          <p className="text-2xl font-bold text-gray-900">{count}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

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
