import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { useScrollAnimation } from '@/presentation/hooks/useScrollAnimation';
import { newsData, newsCategories } from '@/data/newsData';

// Obtener las 3 noticias más recientes para mostrar en la página de inicio
const getLatestNews = () => {
  return newsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(news => {
      const categoryInfo = newsCategories.find(cat => cat.id === news.category);
      return {
        id: news.id,
        title: news.title,
        excerpt: news.excerpt,
        date: `${news.day} ${news.month} 2024`,
        category: categoryInfo?.name || news.category,
        image: news.image,
        categoryColor: categoryInfo?.color || 'bg-gray-100 text-gray-800'
      };
    });
};

const NEWS_ITEMS = getLatestNews();

export const NewsSection: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            Noticias y Actividades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestras últimas actividades, proyectos y logros 
            en responsabilidad social universitaria.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/noticias/${news.id}`} className="block">
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer p-0">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={news.categoryColor}>
                      {news.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(news.date)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors duration-200">
                    <span className="mr-2">Leer más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/noticias" className="inline-block">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Ver todas las noticias
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
