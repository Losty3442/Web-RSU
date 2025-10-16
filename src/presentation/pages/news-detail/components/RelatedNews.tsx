import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { newsData, getNewsByCategory } from "@/data/newsData";

interface RelatedNewsProps {
  currentNewsId: number;
  category?: string;
  limit?: number;
}

export const RelatedNews: React.FC<RelatedNewsProps> = ({
  currentNewsId,
  category,
  limit = 3,
}) => {
  // Obtener noticias relacionadas (excluyendo la actual)
  const relatedNews = category
    ? getNewsByCategory(category)
        .filter((news) => news.id !== currentNewsId)
        .slice(0, limit)
    : newsData.filter((news) => news.id !== currentNewsId).slice(0, limit);

  if (relatedNews.length === 0) return null;

  const getImageForNews = (id: number): string => {
    const images = [
      "/images/noticias1.jpg",
      "/images/noticias2.jpg",
      "/images/noticias3.jpg",
      "/images/noticias4.jpg",
      "/images/noticias5.jpeg",
      "/images/noticias6.jpg",
      "/images/Feria_02-scaled.jpeg",
      "/images/Encuentro_01-scaled.jpeg",
    ];

    return images[id % images.length];
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">
        Noticias Relacionadas
      </h3>

      <div className="space-y-4">
        {relatedNews.map((news) => (
          <Link
            key={news.id}
            to={`/noticias/${news.id}`}
            className="group block"
          >
            <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <img
                  src={getImageForNews(news.id)}
                  alt={news.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm leading-tight">
                  {news.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
