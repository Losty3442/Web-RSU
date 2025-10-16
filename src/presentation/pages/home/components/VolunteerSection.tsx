import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Leaf, Heart, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const VOLUNTEER_TYPES = [
  {
    id: 'educativo',
    title: 'Voluntariado Educativo',
    description: 'Apoyo en programas educativos y de capacitación para comunidades vulnerables.',
    icon: GraduationCap,
    color: 'bg-blue-100 text-blue-800',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'ambiental',
    title: 'Voluntariado Ambiental',
    description: 'Participación en proyectos de conservación ambiental y desarrollo sostenible.',
    icon: Leaf,
    color: 'bg-green-100 text-green-800',
    bgColor: 'bg-green-50'
  },
  {
    id: 'social',
    title: 'Voluntariado Social',
    description: 'Trabajo directo con comunidades vulnerables y grupos en situación de riesgo.',
    icon: Heart,
    color: 'bg-red-100 text-red-800',
    bgColor: 'bg-red-50'
  },
  {
    id: 'salud',
    title: 'Voluntariado en Salud',
    description: 'Apoyo en programas de salud comunitaria y promoción del bienestar.',
    icon: Stethoscope,
    color: 'bg-pink-100 text-pink-800',
    bgColor: 'bg-pink-50'
  }
];

export const VolunteerSection: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voluntariado Universitario
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Únete a nuestros programas de voluntariado y contribuye al desarrollo 
            de tu comunidad mientras desarrollas competencias profesionales y personales.
          </p>
        </motion.div>

        {/* Volunteer Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VOLUNTEER_TYPES.map((volunteer, index) => {
            const Icon = volunteer.icon;
            
            return (
              <motion.div
                key={volunteer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${volunteer.bgColor}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon className="h-8 w-8 text-gray-700" />
                    </div>
                    
                    <Badge className={`mb-3 ${volunteer.color}`}>
                      {volunteer.title}
                    </Badge>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {volunteer.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres ser parte del cambio?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Inscríbete en nuestros programas de voluntariado y contribuye al desarrollo 
              sostenible de nuestra región mientras enriqueces tu formación profesional.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Únete como voluntario
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
