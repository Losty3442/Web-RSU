import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Calendar, Users, Target, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ACTIVITIES = [
  {
    id: 'viii-enarsu',
    title: 'VIII ENARSU',
    description: 'Encuentro Nacional de Responsabilidad Social Universitaria - Un espacio de diálogo y reflexión sobre el impacto de la RSU en el desarrollo nacional.',
    icon: Calendar,
    color: 'bg-blue-500',
    href: '/actividades/viii-enarsu',
    status: 'Próximo'
  },
  {
    id: 'actividades-rsu',
    title: 'Actividades RSU',
    description: 'Programa integral de actividades de responsabilidad social universitaria que involucra a toda la comunidad académica.',
    icon: Users,
    color: 'bg-green-500',
    href: '/actividades/actividades-rsu',
    status: 'Activo'
  },
  {
    id: 'iniciativas-drsu',
    title: 'Iniciativas DRSU',
    description: 'Proyectos e iniciativas innovadoras desarrolladas por la Dirección de RSU para el beneficio de la comunidad.',
    icon: Lightbulb,
    color: 'bg-purple-500',
    href: '/actividades/iniciativas-drsu',
    status: 'En desarrollo'
  },
  {
    id: 'proyectos-drsu',
    title: 'Proyectos DRSU',
    description: 'Proyectos estratégicos de la Dirección de RSU enfocados en el desarrollo sostenible y la transformación social.',
    icon: Target,
    color: 'bg-orange-500',
    href: '/actividades/proyectos-drsu',
    status: 'Activo'
  }
];

export default function ActivitiesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras Actividades
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Descubre los programas, proyectos e iniciativas que desarrollamos 
              para promover la responsabilidad social universitaria y el desarrollo sostenible.
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
              Programas y Proyectos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce en detalle cada una de nuestras actividades y cómo contribuyen 
              al desarrollo de nuestra comunidad universitaria y la sociedad piurana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity, index) => {
              const Icon = activity.icon;
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          className={
                            activity.status === 'Activo' ? 'bg-green-100 text-green-800' :
                            activity.status === 'Próximo' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }
                        >
                          {activity.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {activity.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      <button 
                        onClick={() => navigate(activity.href)}
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

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres participar en nuestras actividades?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a nuestros programas y contribuye al desarrollo sostenible 
              de nuestra región mientras enriqueces tu formación profesional.
            </p>
            <button 
              onClick={() => navigate('/contacto')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Contactar para participar
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
