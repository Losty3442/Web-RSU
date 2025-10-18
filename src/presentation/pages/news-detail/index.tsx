import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Eye,
  ArrowLeft,
  Heart,
  Star,
  MapPin,
  Clock,
  Share2,
} from "lucide-react";
import { Badge } from "@/presentation/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { AspectRatio } from "@/presentation/components/ui/aspect-ratio";
import { Button } from "@/presentation/components/ui/button";
import { Breadcrumb } from "@/presentation/components/common/Breadcrumb";
import { RelatedNews } from "./components/RelatedNews";
import { newsCategories, getNewsById } from "@/data/newsData";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const news = getNewsById(id || "");

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Noticia no encontrada
          </h1>
          <Link to="/noticias">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a noticias
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryInfo = newsCategories.find((cat) => cat.id === news.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Header sticky */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/noticias">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Breadcrumb
                items={[
                  { label: "Noticias", href: "/noticias" },
                  { label: news.title },
                ]}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <img
                  src={news.image || "/images/noticias1.jpg"}
                  alt={news.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/noticias1.jpg";
                  }}
                />
              </div>

              {/* Mini galería */}
              {news.gallery && news.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {news.gallery.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-20 overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Galería ${index + 1}`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-200 cursor-pointer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/noticias1.jpg";
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Información principal */}
            <div className="space-y-6">
              {/* Título y metadatos */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                      {news.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">4.8</span>
                        <span>({news.views || "1,000"} visualizaciones)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Piura, Perú</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge de categoría */}
                <Badge
                  variant="secondary"
                  className={`${
                    categoryInfo?.color || "bg-gray-100 text-gray-800"
                  } text-sm px-3 py-1`}
                >
                  {categoryInfo?.name || news.category}
                </Badge>
              </div>

              {/* Extracto destacado */}
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-blue-500">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {news.excerpt.replace(/Leer más.*$/, "").trim()}
                </p>
              </div>

              {/* Contenido principal */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:text-blue-900 prose-blockquote:p-4 prose-blockquote:rounded-lg">
                <div
                  dangerouslySetInnerHTML={{
                    __html: news.content || news.excerpt,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Card de información */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarImage src="/images/DRSU-logo.png" alt="DRSU" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {news.author || "DRSU"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Universidad Nacional de Piura
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Publicado el {news.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Tiempo de lectura: 5 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span>{news.views || "1,000"} visualizaciones</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button className="w-full gap-2">
                    <Heart className="w-4 h-4" />
                    Guardar noticia
                  </Button>
                </div>
              </div>
            </div>

            {/* Noticias relacionadas */}
            <RelatedNews
              currentNewsId={news.id}
              category={news.category}
              limit={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
