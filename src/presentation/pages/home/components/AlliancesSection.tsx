import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/card';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const ALLIANCES = [
  {
    id: 1,
    name: 'Gobierno Regional de Piura',
    description: 'Colaboración en proyectos de desarrollo regional y políticas públicas.',
    logo: '/images/logo-gobierno-regional.png',
    website: '#'
  },
  {
    id: 2,
    name: 'Municipalidad Provincial de Piura',
    description: 'Trabajo conjunto en iniciativas de desarrollo urbano sostenible.',
    logo: '/images/logo-municipalidad.png',
    website: '#'
  },
  {
    id: 3,
    name: 'ONG Desarrollo Sostenible',
    description: 'Alianza estratégica para proyectos ambientales y sociales.',
    logo: '/images/logo-ong.png',
    website: '#'
  },
  {
    id: 4,
    name: 'Cámara de Comercio de Piura',
    description: 'Vinculación universidad-empresa para el desarrollo económico.',
    logo: '/images/logo-camara-comercio.png',
    website: '#'
  },
  {
    id: 5,
    name: 'MINSA - Dirección Regional',
    description: 'Colaboración en programas de salud pública y prevención.',
    logo: '/images/logo-minsa.png',
    website: '#'
  },
  {
    id: 6,
    name: 'MINEDU - UGEL Piura',
    description: 'Apoyo en programas educativos y capacitación docente.',
    logo: '/images/logo-minedu.png',
    website: '#'
  }
];

export const AlliancesSection: React.FC = () => {
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
            Nuestras Alianzas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos en colaboración con instituciones públicas, privadas y organizaciones 
            de la sociedad civil para maximizar el impacto de nuestras acciones.
          </p>
        </motion.div>

        {/* Alliances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALLIANCES.map((alliance, index) => (
            <motion.div
              key={alliance.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-medium">LOGO</span>
                    </div>
                  </div>

                  {/* Alliance Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                    {alliance.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {alliance.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors duration-200">
                    <span className="mr-2">Conocer más</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres formar una alianza con nosotros?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si tu organización comparte nuestros valores y objetivos de responsabilidad social, 
              nos encantaría explorar oportunidades de colaboración.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contáctanos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
