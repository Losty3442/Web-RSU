import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { useNews } from '../../../hooks/useNewsQueries';
import NewsTable from './components/NewsTable';
import { Plus, Search } from 'lucide-react';

const NewsManagement: React.FC = () => {
  const { data: news, isLoading } = useNews();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = news?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Noticias</h1>
          <p className="text-gray-600 mt-1">
            Administra las noticias del sitio web
          </p>
        </div>
        <Link to="/admin/news/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Noticia
          </Button>
        </Link>
      </div>

      {/* Search and Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {news?.length || 0}
                </p>
                <p className="text-sm text-gray-500">Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {filteredNews.length}
                </p>
                <p className="text-sm text-gray-500">Mostradas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Noticias</CardTitle>
          <CardDescription>
            {searchTerm 
              ? `Mostrando ${filteredNews.length} de ${news?.length || 0} noticias`
              : `Total de ${news?.length || 0} noticias`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewsTable 
          news={filteredNews} 
          isLoading={isLoading} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManagement;
