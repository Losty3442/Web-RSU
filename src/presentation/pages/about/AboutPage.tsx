import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Card, CardContent } from '../../components/ui/card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Dr. María González',
    position: 'Directora de RSU',
    image: '/images/team-1.jpg',
    description: 'Doctora en Ciencias Sociales con 15 años de experiencia en responsabilidad social.'
  },
  {
    id: 2,
    name: 'Mg. Carlos Rodríguez',
    position: 'Coordinador de Proyectos',
    image: '/images/team-2.jpg',
    description: 'Magíster en Gestión Pública especializado en desarrollo comunitario.'
  },
  {
    id: 3,
    name: 'Lic. Ana Martínez',
    position: 'Coordinadora de Voluntariado',
    image: '/images/team-3.jpg',
    description: 'Licenciada en Trabajo Social con experiencia en programas de voluntariado.'
  }
];

export const AboutPage: React.FC = () => {
  const { isVisible: heroVisible, ref: heroRef } = useScrollAnimation();
  const { isVisible: missionVisible, ref: missionRef } = useScrollAnimation();
  const { isVisible: teamVisible, ref: teamRef } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Foto_Principal-4.jpg" 
            alt="Acerca de nosotros" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Acerca de' }
                ]}
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Acerca de Nosotros
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conoce nuestra historia, misión y el equipo comprometido con la responsabilidad social universitaria.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section ref={missionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Promover la responsabilidad social universitaria a través de la formación integral, 
                    la investigación aplicada, la extensión universitaria y la gestión institucional 
                    transparente, contribuyendo al desarrollo sostenible de la región Piura.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ser reconocidos como la dirección líder en responsabilidad social universitaria 
                    del norte del Perú, formando profesionales comprometidos con el desarrollo 
                    sostenible y la transformación social de su entorno.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                  <ul className="text-gray-600 leading-relaxed text-left space-y-2">
                    <li>• <strong>Compromiso social:</strong> Dedicación al bienestar comunitario</li>
                    <li>• <strong>Transparencia:</strong> Gestión abierta y honesta</li>
                    <li>• <strong>Sostenibilidad:</strong> Desarrollo responsable</li>
                    <li>• <strong>Inclusión:</strong> Participación de todos los sectores</li>
                    <li>• <strong>Excelencia:</strong> Calidad en todas nuestras acciones</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={teamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce a los profesionales comprometidos que lideran nuestras iniciativas 
              de responsabilidad social universitaria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary font-semibold mb-3">
                      {member.position}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestra Historia
              </h2>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                La Dirección de Responsabilidad Social Universitaria de la Universidad Nacional de Piura 
                fue creada en el año 2015 como respuesta a la necesidad de institucionalizar el compromiso 
                social de nuestra casa de estudios con la comunidad piurana y la región.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde sus inicios, hemos trabajado de manera sistemática en el desarrollo de programas 
                y proyectos que integren la formación académica con el servicio a la comunidad, 
                promoviendo una cultura de responsabilidad social entre estudiantes, docentes y 
                personal administrativo.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                A lo largo de estos años, hemos logrado establecer alianzas estratégicas con diversas 
                instituciones públicas y privadas, desarrollar más de 50 proyectos de impacto social, 
                y formar a cientos de estudiantes en valores de compromiso social y desarrollo sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
