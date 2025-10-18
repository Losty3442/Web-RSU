import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/presentation/components/ui/card";
import { Badge } from "@/presentation/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { AspectRatio } from "@/presentation/components/ui/aspect-ratio";
import { getNewsByCategory, newsCategories } from "@/data/newsData";

interface NewsGridProps {
  currentPage: number;
  itemsPerPage: number;
  selectedCategory: string;
}

export const NewsGrid: React.FC<NewsGridProps> = ({
  currentPage,
  itemsPerPage,
  selectedCategory,
}) => {
  // Usar datos del archivo newsData.ts
  const filteredNews = getNewsByCategory(selectedCategory);

  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const getCategoryColor = (category: string) => {
    const categoryInfo = newsCategories.find((cat) => cat.id === category);
    return categoryInfo ? categoryInfo.color : "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString: string) => {
    // El formato ya viene como "14 de octubre de 2025"
    return dateString;
  };

  const getImageForNews = (news: any): string => {
    // Use the actual image from the news data, fallback to a default if not available
    return news.image || "/images/noticias1.jpg";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "eventos":
        return "🎉";
      case "alianzas":
        return "🤝";
      case "voluntariado":
        return "❤️";
      case "capacitacion":
        return "📚";
      case "salud":
        return "🏥";
      case "reconocimientos":
        return "🏆";
      default:
        return "📰";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      {currentNews.map((news) => (
        <Link
          key={news.id}
          to={`/noticias/${news.id}`}
          className="group cursor-pointer"
        >
          <Card className="overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-white p-0">
            {/* Imagen principal */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <img
                src={getImageForNews(news)}
                alt={news.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ 
                  objectPosition: 'center center'
                }}
              />

              {/* Badge de categoría */}
              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className={`${getCategoryColor(
                    news.category || "all"
                  )} backdrop-blur-sm bg-white/90 border-0 shadow-sm`}
                >
                  <span className="mr-1">
                    {getCategoryIcon(news.category || "all")}
                  </span>
                  {news.category
                    ? news.category.charAt(0).toUpperCase() +
                      news.category.slice(1)
                    : "General"}
                </Badge>
              </div>

            </div>

            {/* Contenido */}
            <div className="p-4 space-y-3">
              {/* Título */}
              <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                {news.title}
              </h3>

              {/* Extracto */}
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {news.excerpt.replace(/Leer más.*$/, "").trim()}
              </p>

              {/* Metadatos */}
              <div className="flex items-center text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(news.date)}</span>
                </div>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <Avatar size="sm">
                  <AvatarImage src="/images/logo.png" alt="DRSU" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-900 truncate">
                    {news.author || "DRSU"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Universidad Nacional de Piura
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
