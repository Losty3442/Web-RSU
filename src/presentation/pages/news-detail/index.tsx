import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Clock,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header elegante */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-4 w-full">
              <Link to="/noticias">
                <Button variant="outline" size="sm" className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200">
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex-1 flex items-center">
                <Breadcrumb
                  items={[
                    { label: "Noticias", href: "/noticias" },
                    { label: news.title },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm">
          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className={`${
                categoryInfo?.color || "bg-blue-100 text-blue-800"
              } text-sm px-4 py-2 font-medium`}
            >
              {categoryInfo?.name || news.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {news.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Piura, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Columna principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Imagen principal */}
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={news.image || "/images/noticias1.jpg"}
                  alt={news.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/noticias1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Mini galería */}
              {news.gallery && news.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {news.gallery.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-24 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`Galería ${index + 1}`}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
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

            {/* Extracto destacado */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500 shadow-sm">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {news.excerpt.replace(/Leer más.*$/, "").trim()}
              </p>
            </div>

            {/* Contenido principal */}
            <div className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-blue-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50 prose-blockquote:to-indigo-50 prose-blockquote:text-blue-900 prose-blockquote:p-6 prose-blockquote:rounded-xl prose-blockquote:shadow-sm prose-blockquote:font-medium prose-blockquote:text-lg prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: news.content || news.excerpt,
                }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Card de información del autor */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center space-y-4">
                <Avatar size="lg" className="mx-auto">
                  <AvatarImage src="/images/DRSU-logo.png" alt="DRSU" />
                  <AvatarFallback className="bg-blue-100 text-blue-800 font-bold">DR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {news.author || "DRSU"}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Universidad Nacional de Piura
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Publicado el {news.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Tiempo de lectura: 5 min</span>
                  </div>
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
