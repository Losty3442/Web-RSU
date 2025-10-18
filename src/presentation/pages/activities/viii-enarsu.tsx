import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function VIIIEnarsuPage() {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/20 text-white mb-4">
              Próximo Evento
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              VIII ENARSU
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Encuentro Nacional de Responsabilidad Social Universitaria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Sobre el VIII ENARSU
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                      <p className="mb-4">
                        El VIII Encuentro Nacional de Responsabilidad Social Universitaria (ENARSU) 
                        es un espacio de diálogo, reflexión y construcción colectiva sobre el papel 
                        de las universidades en el desarrollo sostenible del país.
                      </p>
                      <p className="mb-4">
                        Este encuentro reúne a representantes de universidades públicas y privadas, 
                        organizaciones de la sociedad civil, instituciones gubernamentales y 
                        estudiantes para compartir experiencias, buenas prácticas y estrategias 
                        innovadoras en responsabilidad social universitaria.
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                        Objetivos del Encuentro
                      </h3>
                      <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Promover el intercambio de experiencias en RSU entre universidades</li>
                        <li>Fortalecer las redes de colaboración interuniversitaria</li>
                        <li>Identificar desafíos y oportunidades en la implementación de RSU</li>
                        <li>Generar propuestas para políticas públicas en educación superior</li>
                        <li>Reconocer buenas prácticas y proyectos destacados</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Información del Evento
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-gray-900">Fecha</p>
                          <p className="text-sm text-gray-600">Por confirmar</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-gray-900">Duración</p>
                          <p className="text-sm text-gray-600">3 días</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-gray-900">Lugar</p>
                          <p className="text-sm text-gray-600">Universidad Nacional de Piura</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-gray-900">Participantes</p>
                          <p className="text-sm text-gray-600">+200 personas</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                        Registrarse
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Próximamente se abrirán las inscripciones
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
