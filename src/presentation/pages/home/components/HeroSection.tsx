import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuroraText } from "@/presentation/components/ui/aurora-text";

// Array de imágenes para el carrusel
const heroImages = [
  {
    src: "/images/Foto_Principal-5.jpg",
    alt: "Universidad Nacional de Piura - Campus Principal",
    title: "Campus Principal",
    description: "Nuestra casa de estudios comprometida con la sociedad",
  },
  {
    src: "/images/Encuentro_01-scaled.jpeg",
    alt: "Encuentro de Responsabilidad Social Universitaria",
    title: "Encuentro RSU",
    description: "Espacios de diálogo y reflexión sobre responsabilidad social",
  },
  {
    src: "/images/Feria_02-scaled.jpeg",
    alt: "Feria de Responsabilidad Social",
    title: "Feria RSU",
    description: "Mostrando el impacto de nuestros proyectos sociales",
  },
  {
    src: "/images/equipo-drsu.jpg",
    alt: "Equipo de la Dirección de RSU",
    title: "Nuestro Equipo",
    description: "Profesionales comprometidos con el desarrollo social",
  },
  {
    src: "/images/Foto_01-2.jpg",
    alt: "Actividades de Responsabilidad Social",
    title: "Actividades Sociales",
    description: "Transformando comunidades a través de la acción",
  },
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-rotación del carrusel cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {/* Consistent blue background to prevent white flash */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-900/90" />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Vignette effect - matches exact primary color (#071A40) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A40]/80 via-transparent to-[#071A40]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A40]/80 via-transparent to-[#071A40]/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A40]/60 via-transparent to-[#071A40]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A40]/70 via-transparent to-[#071A40]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A40]/50 via-transparent to-[#071A40]/60" />
      </div>

      {/* Fixed Top Navigation */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-6 lg:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-white/80 text-sm font-medium">
          Universidad Nacional de Piura
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {/* Main Content - Perfectly Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              {/* Image Info */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-white text-xl font-semibold mb-3 drop-shadow-lg"
                  style={{ fontFamily: "Alan Sans, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {heroImages[currentImageIndex].title}
                </motion.h2>
                <motion.p
                  className="text-white/90 text-base max-w-lg mx-auto leading-relaxed drop-shadow-md"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {heroImages[currentImageIndex].description}
                </motion.p>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "Alan Sans, sans-serif" }}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
              >
                <motion.span
                  className="text-white drop-shadow-2xl block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Dirección de
                </motion.span>
                <motion.div
                  className="my-2"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                >
                  <AuroraText
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold"
                    colors={["#FFFFFF", "#00BFFF", "#1E90FF", "#4169E1"]}
                    speed={1}
                  >
                    Responsabilidad Social
                  </AuroraText>
                </motion.div>
                <motion.span
                  className="text-white drop-shadow-2xl block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Universitaria
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
                style={{ fontFamily: "Open Sans, sans-serif" }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
              >
                <span className="text-white drop-shadow-lg font-medium">
                  Comprometidos con el desarrollo sostenible y la transformación
                  <br />
                  social de nuestra comunidad universitaria y la sociedad
                  piurana.
                </span>
              </motion.p>

              {/* Call to Action */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => navigate('/what-is-rsu')}
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#00BFFF]/25 hover:scale-105 border-2 border-[#00BFFF]"
                  style={{ fontFamily: "Alan Sans, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                >
                  Conoce más sobre nosotros
                </motion.button>
                <motion.button
                  onClick={() => navigate('/noticias')}
                  className="border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm shadow-xl"
                  style={{ fontFamily: "Alan Sans, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.3 }}
                >
                  Ver nuestras actividades
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Controls - Only Indicators */}
        <motion.div
          className="flex justify-center items-center p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Carousel Indicators */}
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-accent w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};
