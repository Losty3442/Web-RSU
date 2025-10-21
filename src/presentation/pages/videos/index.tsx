import { useState } from "react";
import { Card, CardContent } from "@/presentation/components/ui/card";
import { Button } from "@/presentation/components/ui/button";
import { Badge } from "@/presentation/components/ui/badge";
import { 
  Play, 
  Eye, 
  Calendar, 
  Clock,
  PlayCircle
} from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Activación del Voluntariado UNP - 2025",
    description: "Participa de nuestra activación de voluntariado el 19 y 20 de mayo desde las 9:00 a.m. Lugar: Comedor Central y Auditorio Central. ¡Ven y participa! Haz la diferencia.",
    videoUrl: "https://www.youtube.com/embed/FSdZxphEONU?si=S1n047RclLGsFV8E",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20students%20volunteering%20activities%20campus%20modern%20colorful&image_size=landscape_16_9",
    duration: "2:04",
    views: "2,345",
    date: "15 May 2025"
  },
  {
    id: 2,
    title: "Desfile Semana de la Responsabilidad Social Universitaria UNP 2024",
    description: "Revive los mejores momentos del desfile institucional 2024",
    videoUrl: "https://www.youtube.com/embed/gIfiW598k2g?si=uSbeUOiuZDtZgHXI",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=university%20parade%20students%20marching%20colorful%20banners%20celebration&image_size=landscape_16_9",
    duration: "1:17",
    views: "1,892",
    date: "10 Oct 2024"
  },
  {
    id: 3,
    title: "Conferencia de Prensa sobre RS",
    description: "Conferencia de prensa sobre Responsabilidad Social en la UNP",
    videoUrl: "https://www.youtube.com/embed/R2NdzrionAQ?si=QCVpGBT1HoI0wD8W",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=press%20conference%20university%20officials%20microphones%20professional%20setting&image_size=landscape_16_9",
    duration: "2:22",
    views: "1,567",
    date: "05 Sep 2024"
  },
  {
    id: 4,
    title: "Primera Reunión Interinstitucional de Responsabilidad Social",
    description: "Encuentro con instituciones aliadas para fortalecer la RSU",
    videoUrl: "https://www.youtube.com/embed/jbECzq7o8iE?si=GAGl86aKoLWN_UaN",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=institutional%20meeting%20round%20table%20professionals%20collaboration%20modern%20office&image_size=landscape_16_9",
    duration: "2:33",
    views: "1,234",
    date: "20 Ago 2024"
  },
  {
    id: 5,
    title: "Videoconferencia 'Diversidad Biológica de la Región Piura'",
    description: "Conferencia magistral sobre la biodiversidad de nuestra región",
    videoUrl: "https://www.youtube.com/embed/jpCdWB_3YHg?si=dbdOIIxzO9zt1cVj",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=biodiversity%20nature%20plants%20animals%20Peru%20ecosystem%20educational%20presentation&image_size=landscape_16_9",
    duration: "1:29:52",
    views: "3,456",
    date: "10 Ago 2020"
  },
  {
    id: 6,
    title: "Roles, funciones y competencias de los gobiernos locales",
    description: "Videoconferencia sobre gestión local y responsabilidad social",
    videoUrl: "https://www.youtube.com/embed/qW9d5TbP-Ig?si=ycjLoyMCzumr8ScL",
    thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=local%20government%20city%20hall%20officials%20meeting%20civic%20responsibility&image_size=landscape_16_9",
    duration: "1:47:46",
    views: "2,789",
    date: "25 Jul 2020"
  }
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Videos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Contenido audiovisual sobre nuestras actividades y proyectos
          </p>
        </div>
      </section>

      {/* Video Player and Playlist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {selectedVideo.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {selectedVideo.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {selectedVideo.views} vistas
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedVideo.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedVideo.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Playlist */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl">
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <PlayCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Lista de reproducción</h3>
                      <p className="text-sm text-gray-500">{videos.length} Videos</p>
                    </div>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedVideo.id === video.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      }`}
                      onClick={() => handleVideoSelect(video)}
                    >
                      <div className="flex space-x-3">
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-20 h-12 object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 rounded flex items-center justify-center">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                          <Badge className="absolute bottom-1 right-1 text-xs bg-black bg-opacity-75 text-white">
                            {video.duration}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-medium line-clamp-2 ${
                            selectedVideo.id === video.id ? 'text-blue-600' : 'text-gray-800'
                          }`}>
                            {video.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Todos los Videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra colección completa de contenido audiovisual sobre responsabilidad social universitaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-0">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white bg-opacity-90 text-gray-800 hover:bg-white hover:bg-opacity-100"
                      onClick={() => handleVideoSelect(video)}
                    >
                      <Play className="w-6 h-6 mr-2" />
                      Reproducir
                    </Button>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white">
                    {video.duration}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {video.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Estadísticas de Videos
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Nuestro contenido audiovisual ha alcanzado miles de visualizaciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">{videos.length}</h3>
              <p className="text-blue-100">Videos Disponibles</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">12,283</h3>
              <p className="text-blue-100">Total Visualizaciones</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">4h 25m</h3>
              <p className="text-blue-100">Duración Total</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">2020-2025</h3>
              <p className="text-blue-100">Período de Contenido</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
