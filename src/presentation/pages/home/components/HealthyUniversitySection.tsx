import React from "react";
import { motion } from "framer-motion";
import { Heart, Apple, Brain, User } from "lucide-react";

const healthCategories = [
  {
    icon: Apple,
    title: "Salud Nutricional",
    description: "Promoción de hábitos alimentarios saludables",
  },
  {
    icon: Brain,
    title: "Salud Mental",
    description: "Bienestar psicológico y emocional",
  },
  {
    icon: User,
    title: "Salud Física",
    description: "Actividad física y prevención de enfermedades",
  },
];

export const HealthyUniversitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icono principal */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: "Alan Sans, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Universidad Saludable
          </motion.h2>

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: "Open Sans, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Una Universidad Saludable UNP incorpora la promoción integral de la
            salud como eje transversal de su proyecto educativo, laboral y
            comunitario, impulsada por la Dirección de Responsabilidad Social
            Universitaria (DRSU) para fortalecer el bienestar físico, mental y
            nutricional de toda la comunidad universitaria (estudiantes,
            docentes y personal administrativo), promoviendo estilos de vida
            saludables, entornos laborales seguros y hábitos sostenibles que se
            reflejen en los hogares y en la sociedad piurana.
          </motion.p>

          {/* Iconos de categorías */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
