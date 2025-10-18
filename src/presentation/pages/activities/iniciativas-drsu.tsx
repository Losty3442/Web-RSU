import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const INITIATIVES = [
  {
    title: 'Innovación Social Universitaria',
    description: 'Programa que fomenta la innovación y el emprendimiento social entre estudiantes y docentes.',
    icon: Lightbulb,
    status: 'En desarrollo',
    progress: 75
  },
  {
    title: 'Red de Voluntarios RSU',
    description: 'Plataforma digital que conecta voluntarios con oportunidades de servicio comunitario.',
    icon: Users,
    status: 'En desarrollo',
    progress: 60
  },
  {
    title: 'Observatorio RSU',
    description: 'Sistema de monitoreo y evaluación del impacto de las actividades de RSU.',
    icon: Target,
    status: 'En desarrollo',
    progress: 40
  },
  {
    title: 'Programa de Liderazgo Social',
    description: 'Formación de líderes estudiantiles comprometidos con el desarrollo social.',
    icon: TrendingUp,
    status: 'En desarrollo',
    progress: 85
  }
];

export default function IniciativasDrsuPage() {
  const { isVisible, ref } = useScrollAnimation();
  const navigate = useNavigate();

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
              En Desarrollo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Iniciativas DRSU
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Proyectos e iniciativas innovadoras desarrolladas por la Dirección de RSU 
              para el beneficio de la comunidad universitaria y la sociedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Iniciativas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre las iniciativas innovadoras que estamos desarrollando para 
              fortalecer la responsabilidad social universitaria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INITIATIVES.map((initiative, index) => {
              const Icon = initiative.icon;
              
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          {initiative.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {initiative.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {initiative.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progreso</span>
                          <span>{initiative.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${initiative.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => navigate('/contacto')}
                        className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                      >
                        Ver más detalles →
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Buscamos ser pioneros en la implementación de iniciativas innovadoras 
              que transformen la manera en que las universidades se relacionan con 
              su entorno social y contribuyan al desarrollo sostenible.
            </p>
            <div className="bg-primary/5 rounded-lg p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Objetivos Estratégicos
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Innovación</h5>
                  <p className="text-sm text-gray-600">Desarrollar soluciones creativas a problemas sociales</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Impacto</h5>
                  <p className="text-sm text-gray-600">Generar cambios positivos medibles en la comunidad</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Sostenibilidad</h5>
                  <p className="text-sm text-gray-600">Crear iniciativas que perduren en el tiempo</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Colaboración</h5>
                  <p className="text-sm text-gray-600">Fortalecer alianzas estratégicas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
