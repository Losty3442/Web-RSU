import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-rotación del carrusel cada 6 segundos
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark background to prevent white flash during transitions */}
        <div className="absolute inset-0 bg-slate-800" />

        {/* Balanced overlay - visible images with good text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
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
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
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
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-white/90 text-lg font-medium mb-2">
                  {heroImages[currentImageIndex].title}
                </h2>
                <p className="text-white/70 text-sm max-w-md mx-auto">
                  {heroImages[currentImageIndex].description}
                </p>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Dirección de
                <br />
                <span className="text-accent">Responsabilidad Social</span>
                <br />
                Universitaria
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Comprometidos con el desarrollo sostenible y la transformación
                social de nuestra comunidad universitaria y la sociedad piurana.
              </motion.p>

              {/* Call to Action */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                  Conoce más sobre nosotros
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/10">
                  Ver nuestras actividades
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <motion.div
          className="flex justify-between items-center p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevImage}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={20} />
            </button>
          </div>

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

          {/* Image Counter */}
          <div className="text-white/70 text-sm font-medium">
            {currentImageIndex + 1} / {heroImages.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
