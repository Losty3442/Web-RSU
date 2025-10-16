import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Search, Users, Settings } from 'lucide-react';
import { FeatureCardComponent } from '../../../components/common/FeatureCard';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const FEATURES = [
  {
    id: 'formacion',
    title: 'Formación Profesional',
    description: 'Desarrollo de competencias profesionales con responsabilidad social, integrando valores éticos en la formación académica.',
    icon: Briefcase,
    color: 'bg-blue-500'
  },
  {
    id: 'investigacion',
    title: 'Investigación',
    description: 'Investigación aplicada para el desarrollo sostenible, generando conocimiento que beneficie a la sociedad.',
    icon: Search,
    color: 'bg-green-500'
  },
  {
    id: 'vinculo',
    title: 'Vínculo con el entorno',
    description: 'Conexión directa con la comunidad y sus necesidades, promoviendo el desarrollo local y regional.',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    id: 'gestion',
    title: 'Gestión Institucional',
    description: 'Administración responsable y transparente, garantizando el uso eficiente de los recursos universitarios.',
    icon: Settings,
    color: 'bg-orange-500'
  }
];

export const WhatWeDoSection: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La Responsabilidad Social Universitaria se desarrolla a través de cuatro ejes fundamentales 
            que integran la formación, investigación, extensión y gestión institucional.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCardComponent
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estos ejes trabajan de manera integrada para formar profesionales comprometidos con el desarrollo 
            sostenible, generar conocimiento útil para la sociedad, establecer vínculos sólidos con la comunidad 
            y mantener una gestión institucional transparente y eficiente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
