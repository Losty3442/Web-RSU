import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { useDocuments } from '../../../hooks/useDocumentQueries';
import DocumentTable from './components/DocumentTable';
import { Plus, Search, FileText, Settings } from 'lucide-react';

const DocumentsManagement: React.FC = () => {
  const { data: documents, isLoading: documentsLoading } = useDocuments('DOCUMENTS');
  const { data: tools, isLoading: toolsLoading } = useDocuments('TOOLS');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const filteredTools = tools?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Documentos</h1>
          <p className="text-gray-600 mt-1">
            Administra documentos y herramientas del sitio web
          </p>
        </div>
        <Link to="/admin/documents/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Documento
          </Button>
        </Link>
      </div>

      {/* Search and Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {documents?.length || 0}
                  </p>
                  <p className="text-sm text-gray-500">Documentos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {tools?.length || 0}
                  </p>
                  <p className="text-sm text-gray-500">Herramientas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList>
          <TabsTrigger value="documents" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Documentos ({documents?.length || 0})</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Herramientas ({tools?.length || 0})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documentos de Gestión</CardTitle>
              <CardDescription>
                {searchTerm 
                  ? `Mostrando ${filteredDocuments.length} de ${documents?.length || 0} documentos`
                  : `Total de ${documents?.length || 0} documentos`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentTable 
                documents={filteredDocuments} 
                isLoading={documentsLoading} 
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <Card>
            <CardHeader>
              <CardTitle>Herramientas</CardTitle>
              <CardDescription>
                {searchTerm 
                  ? `Mostrando ${filteredTools.length} de ${tools?.length || 0} herramientas`
                  : `Total de ${tools?.length || 0} herramientas`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentTable 
                documents={filteredTools} 
                isLoading={toolsLoading} 
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentsManagement;
