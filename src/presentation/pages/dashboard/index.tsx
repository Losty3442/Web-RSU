import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { useNews } from '../../hooks/useNewsQueries';
import { useDocuments } from '../../hooks/useDocumentQueries';
import { 
  Newspaper, 
  FileText, 
  Plus, 
  TrendingUp, 
  Calendar,
  ArrowRight
} from 'lucide-react';

const DashboardHome: React.FC = () => {
  const { data: news, isLoading: newsLoading } = useNews();
  const { data: documents, isLoading: documentsLoading } = useDocuments();
  const { data: tools, isLoading: toolsLoading } = useDocuments('TOOLS');

  const stats = [
    {
      title: 'Total Noticias',
      value: news?.length || 0,
      icon: Newspaper,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Noticias publicadas',
    },
    {
      title: 'Documentos',
      value: documents?.length || 0,
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Documentos de gestión',
    },
    {
      title: 'Herramientas',
      value: tools?.length || 0,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Herramientas disponibles',
    },
    {
      title: 'Este Mes',
      value: news?.filter(item => {
        const itemDate = new Date(item.created_at);
        const now = new Date();
        return itemDate.getMonth() === now.getMonth() && 
               itemDate.getFullYear() === now.getFullYear();
      }).length || 0,
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Nuevas publicaciones',
    },
  ];

  const recentNews = news?.slice(0, 5) || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Bienvenido al panel administrativo de DRSU
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/admin/news">
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Noticia
            </Button>
          </Link>
          <Link to="/admin/documents">
            <Button variant="outline" className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Documento
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent News */}
        <Card className="h-fit">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Newspaper className="h-5 w-5 mr-2" />
                  Noticias Recientes
                </CardTitle>
                <CardDescription>
                  Últimas noticias creadas en el sistema
                </CardDescription>
              </div>
              <Badge variant="secondary">
                {news?.length || 0}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {newsLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : recentNews.length > 0 ? (
              <div className="space-y-4">
                {recentNews.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.author || 'Sin autor'}</span>
                      <span>{new Date(item.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Link to="/admin/news">
                    <Button variant="outline" size="sm" className="w-full">
                      Ver todas las noticias
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Newspaper className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No hay noticias</h3>
                <p className="text-gray-500 mb-4">Comienza creando tu primera noticia</p>
                <Link to="/admin/news">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear primera noticia
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Documents and Tools */}
        <Card className="h-fit">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Documentos y Herramientas
                </CardTitle>
                <CardDescription>
                  Resumen de documentos y herramientas disponibles
                </CardDescription>
              </div>
              <Badge variant="secondary">
                {(documents?.length || 0) + (tools?.length || 0)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {documentsLoading || toolsLoading ? (
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Documentos</p>
                      <p className="text-sm text-gray-500">Documentos de gestión</p>
                    </div>
                  </div>
                  <Badge variant="outline">{documents?.length || 0}</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Herramientas</p>
                      <p className="text-sm text-gray-500">Herramientas disponibles</p>
                    </div>
                  </div>
                  <Badge variant="outline">{tools?.length || 0}</Badge>
                </div>
                
                <div className="pt-2">
                  <Link to="/admin/documents">
                    <Button variant="outline" size="sm" className="w-full">
                      Gestionar documentos
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
