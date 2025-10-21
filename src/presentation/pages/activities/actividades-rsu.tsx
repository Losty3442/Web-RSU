import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, Target, Calendar, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ACTIVITIES = [
  {
    title: 'Programa de Voluntariado Universitario',
    description: 'Iniciativa que conecta a estudiantes con oportunidades de servicio comunitario.',
    icon: Users,
    status: 'Activo'
  },
  {
    title: 'Campañas de Responsabilidad Social',
    description: 'Campañas temáticas que abordan problemáticas sociales específicas.',
    icon: Target,
    status: 'Activo'
  },
  {
    title: 'Jornadas de Reflexión RSU',
    description: 'Espacios de diálogo y reflexión sobre responsabilidad social universitaria.',
    icon: Calendar,
    status: 'Activo'
  },
  {
    title: 'Reconocimientos RSU',
    description: 'Programa de reconocimiento a proyectos y personas destacadas en RSU.',
    icon: Award,
    status: 'Activo'
  }
];

export default function ActividadesRsuPage() {
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
              Programa Activo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actividades RSU
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Programa integral de actividades de responsabilidad social universitaria 
              que involucra a toda la comunidad académica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Actividades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce las diferentes actividades que desarrollamos para promover 
              la responsabilidad social universitaria en nuestra institución.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity, index) => {
              const Icon = activity.icon;
              
              return (
                <motion.div
                  key={activity.title}
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
                          {activity.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {activity.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      
                      <button 
                        onClick={() => navigate('/voluntariado')}
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

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestro Impacto
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              A través de nuestras actividades, hemos logrado impactar positivamente 
              en la comunidad universitaria y la sociedad piurana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Estudiantes Participantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Proyectos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Comunidades Beneficiadas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
