import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Leaf, 
  Heart, 
  Stethoscope, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Send,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useScrollAnimations } from '../../hooks/useScrollAnimation';

const VOLUNTEER_TYPES = [
  {
    id: 'educativo',
    title: 'Voluntariado Educativo',
    description: 'Apoyo en programas educativos y de capacitación para comunidades vulnerables.',
    icon: GraduationCap,
    color: 'bg-blue-100 text-blue-800',
    activities: ['Tutorías académicas', 'Talleres de capacitación', 'Alfabetización digital'],
    commitment: '4 horas semanales',
    duration: '6 meses'
  },
  {
    id: 'ambiental',
    title: 'Voluntariado Ambiental',
    description: 'Participación en proyectos de conservación ambiental y sostenibilidad.',
    icon: Leaf,
    color: 'bg-green-100 text-green-800',
    activities: ['Reforestación', 'Limpieza de espacios públicos', 'Educación ambiental'],
    commitment: '6 horas semanales',
    duration: '4 meses'
  },
  {
    id: 'social',
    title: 'Voluntariado Social',
    description: 'Trabajo directo con comunidades vulnerables y grupos de atención prioritaria.',
    icon: Heart,
    color: 'bg-red-100 text-red-800',
    activities: ['Apoyo a adultos mayores', 'Trabajo con niños', 'Asistencia social'],
    commitment: '5 horas semanales',
    duration: '8 meses'
  },
  {
    id: 'salud',
    title: 'Voluntariado en Salud',
    description: 'Apoyo en programas de salud comunitaria y prevención.',
    icon: Stethoscope,
    color: 'bg-pink-100 text-pink-800',
    activities: ['Campañas de salud', 'Educación preventiva', 'Primeros auxilios'],
    commitment: '8 horas semanales',
    duration: '6 meses'
  }
];

const BENEFITS = [
  {
    icon: Star,
    title: 'Certificación Oficial',
    description: 'Certificado de participación avalado por la universidad'
  },
  {
    icon: Users,
    title: 'Desarrollo Personal',
    description: 'Fortalecimiento de habilidades blandas y liderazgo'
  },
  {
    icon: CheckCircle,
    title: 'Experiencia Práctica',
    description: 'Aplicación de conocimientos en contextos reales'
  },
  {
    icon: Heart,
    title: 'Impacto Social',
    description: 'Contribución directa al desarrollo de la comunidad'
  }
];

const REQUIREMENTS = [
  'Ser estudiante activo de la UNP',
  'Tener promedio ponderado mínimo de 13',
  'Disponibilidad de tiempo según el programa elegido',
  'Compromiso con los valores de responsabilidad social',
  'Participar en la capacitación inicial obligatoria'
];

const VolunteerPage: React.FC = () => {
  const { observeElement, isVisible } = useScrollAnimations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    career: '',
    semester: '',
    volunteerType: '',
    motivation: '',
    availability: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Voluntariado Universitario
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Únete a nuestros programas de voluntariado y contribuye al desarrollo 
              sostenible de nuestra comunidad
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Users className="w-4 h-4 mr-2" />
                +500 Voluntarios Activos
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Programas Todo el Año
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Piura y Alrededores
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Voluntariado */}
      <section ref={(el) => observeElement('volunteer-types', el)} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible('volunteer-types') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programas de Voluntariado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus intereses y disponibilidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VOLUNTEER_TYPES.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible('volunteer-types') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-gray-100">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                      <Badge className={type.color}>{type.duration}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Actividades:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {type.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {type.commitment}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section ref={(el) => observeElement('benefits', el)} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible('benefits') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios del Voluntariado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre todo lo que puedes ganar siendo parte de nuestros programas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible('benefits') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conoce a nuestros voluntarios */}
      <section ref={(el) => observeElement('volunteers', el)} className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible('volunteers') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conoce a nuestros voluntarios
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubre las historias y experiencias de nuestros voluntarios activos
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible('volunteers') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1S9FVuHq0L3x6S1goV-NHNPPm_We23-zw/edit?usp=sharing&ouid=112396737884500674676&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Ver Directorio de Voluntarios
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section ref={(el) => observeElement('requirements', el)} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible('requirements') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Requisitos para Participar
              </h2>
              <p className="text-lg text-gray-600">
                Asegúrate de cumplir con los siguientes requisitos antes de aplicar
              </p>
            </motion.div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {REQUIREMENTS.map((requirement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible('requirements') ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section ref={(el) => observeElement('form', el)} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible('form') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¡Inscríbete Ahora!
              </h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </motion.div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="career">Carrera *</Label>
                      <Input
                        id="career"
                        name="career"
                        value={formData.career}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="semester">Semestre Actual *</Label>
                      <Input
                        id="semester"
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="volunteerType">Programa de Interés *</Label>
                      <select
                        id="volunteerType"
                        name="volunteerType"
                        value={formData.volunteerType}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selecciona un programa</option>
                        {VOLUNTEER_TYPES.map(type => (
                          <option key={type.id} value={type.id}>
                            {type.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="availability">Disponibilidad Horaria *</Label>
                    <Input
                      id="availability"
                      name="availability"
                      placeholder="Ej: Lunes a Viernes 2-6 PM"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">¿Por qué quieres ser voluntario? *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Cuéntanos tu motivación para participar en el programa de voluntariado..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;