import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Target, Users, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PROJECTS = [
  {
    title: 'Proyecto de Desarrollo Comunitario',
    description: 'Iniciativa integral para el desarrollo sostenible de comunidades rurales en Piura.',
    icon: MapPin,
    status: 'Activo',
    duration: '2024-2025',
    beneficiaries: '500+ familias'
  },
  {
    title: 'Programa de Educación Inclusiva',
    description: 'Proyecto que promueve la educación inclusiva y de calidad en zonas vulnerables.',
    icon: Users,
    status: 'Activo',
    duration: '2024-2026',
    beneficiaries: '200+ estudiantes'
  },
  {
    title: 'Iniciativa de Sostenibilidad Ambiental',
    description: 'Proyecto enfocado en la conservación ambiental y desarrollo sostenible.',
    icon: Target,
    status: 'Activo',
    duration: '2024-2025',
    beneficiaries: '10+ comunidades'
  },
  {
    title: 'Programa de Emprendimiento Social',
    description: 'Iniciativa que fomenta el emprendimiento social entre jóvenes universitarios.',
    icon: Award,
    status: 'Activo',
    duration: '2024-2026',
    beneficiaries: '100+ emprendedores'
  }
];

export default function ProyectosDrsuPage() {
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
              Proyectos Activos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proyectos DRSU
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Proyectos estratégicos de la Dirección de RSU enfocados en el desarrollo 
              sostenible y la transformación social de nuestra región.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce los proyectos estratégicos que estamos desarrollando para 
              generar un impacto positivo en la sociedad piurana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={project.title}
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
                        <Badge className="bg-green-100 text-green-800">
                          {project.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duración:</span>
                          <span className="font-medium text-gray-900">{project.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Beneficiarios:</span>
                          <span className="font-medium text-gray-900">{project.beneficiaries}</span>
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

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Impacto de Nuestros Proyectos
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              A través de nuestros proyectos estratégicos, hemos logrado generar 
              un impacto significativo en la comunidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-gray-600">Beneficiarios Directos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Comunidades Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">Proyectos Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres colaborar con nuestros proyectos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a nosotros y contribuye al desarrollo sostenible de nuestra región. 
              Hay muchas formas de participar y hacer la diferencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/voluntariado')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ser Voluntario
              </button>
              <button 
                onClick={() => navigate('/contacto')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Proponer Proyecto
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
