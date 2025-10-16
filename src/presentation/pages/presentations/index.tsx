import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/ui/card";
import { Button } from "@/presentation/components/ui/button";
import { Badge } from "@/presentation/components/ui/badge";
import { 
  FileText, 
  Download, 
  Eye, 
  FileSpreadsheet, 
  FileImage,
  File
} from "lucide-react";

interface Presentation {
  id: number;
  title: string;
  description: string;
  fileType: 'PPT' | 'PDF' | 'DOC' | 'XLS';
  pages: string;
  downloads: number;
  tags: string[];
}

const presentations: Presentation[] = [
  {
    id: 1,
    title: "Introducción a la Responsabilidad Social Universitaria",
    description: "Presentación completa sobre los fundamentos, principios y ejes de la RSU en el contexto universitario peruano.",
    fileType: "PPT",
    pages: "45 diapositivas",
    downloads: 1234,
    tags: ["Fundamentos", "RSU", "Educación"]
  },
  {
    id: 2,
    title: "Gestión de Proyectos Sociales Universitarios",
    description: "Manual práctico con metodologías, herramientas y casos de éxito para la gestión efectiva de proyectos de impacto social.",
    fileType: "PDF",
    pages: "68 páginas",
    downloads: 892,
    tags: ["Proyectos", "Metodología", "Gestión"]
  },
  {
    id: 3,
    title: "Guía de Voluntariado Universitario UNP",
    description: "Documento oficial con lineamientos, procedimientos y requisitos para participar en el sistema de voluntariado de la UNP.",
    fileType: "DOC",
    pages: "24 páginas",
    downloads: 1567,
    tags: ["Voluntariado", "Guía", "UNP"]
  },
  {
    id: 4,
    title: "Matriz de Indicadores de Impacto Social",
    description: "Herramienta de evaluación y seguimiento de indicadores para medir el impacto de proyectos de responsabilidad social.",
    fileType: "XLS",
    pages: "Plantilla Excel",
    downloads: 645,
    tags: ["Evaluación", "Indicadores", "Herramienta"]
  },
  {
    id: 5,
    title: "Universidad Saludable: Modelo de Intervención",
    description: "Presentación sobre el modelo de Universidad Saludable implementado en la UNP, con enfoque en salud física, mental y nutricional.",
    fileType: "PPT",
    pages: "38 diapositivas",
    downloads: 723,
    tags: ["Salud", "Bienestar", "Modelo"]
  },
  {
    id: 6,
    title: "Informe Anual de RSU 2024",
    description: "Documento completo con todas las actividades, logros, indicadores y resultados de la gestión de responsabilidad social del año 2024.",
    fileType: "PDF",
    pages: "95 páginas",
    downloads: 456,
    tags: ["Informe", "Resultados", "2024"]
  }
];

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case 'PPT':
      return <FileImage className="w-8 h-8 text-orange-500" />;
    case 'PDF':
      return <FileText className="w-8 h-8 text-red-500" />;
    case 'DOC':
      return <File className="w-8 h-8 text-blue-500" />;
    case 'XLS':
      return <FileSpreadsheet className="w-8 h-8 text-green-500" />;
    default:
      return <FileText className="w-8 h-8 text-gray-500" />;
  }
};

const getFileTypeColor = (fileType: string) => {
  switch (fileType) {
    case 'PPT':
      return 'bg-orange-100 text-orange-800';
    case 'PDF':
      return 'bg-red-100 text-red-800';
    case 'DOC':
      return 'bg-blue-100 text-blue-800';
    case 'XLS':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function PresentationsPage() {
  const handlePreview = (presentation: Presentation) => {
    console.log('Vista previa de:', presentation.title);
  };

  const handleDownload = (presentation: Presentation) => {
    console.log('Descargando:', presentation.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Presentaciones y Material Didáctico
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Recursos descargables para la comunidad universitaria
          </p>
        </div>
      </section>

      {/* Presentations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentations.map((presentation) => (
              <Card key={presentation.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getFileIcon(presentation.fileType)}
                      <Badge className={`${getFileTypeColor(presentation.fileType)} font-semibold`}>
                        {presentation.fileType}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {presentation.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {presentation.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {presentation.pages}
                    </span>
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {presentation.downloads.toLocaleString()} descargas
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {presentation.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreview(presentation)}
                      className="flex-1 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Vista previa
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(presentation)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Estadísticas de Recursos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros recursos educativos han sido descargados miles de veces por la comunidad universitaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">6</h3>
              <p className="text-gray-600">Recursos Disponibles</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">5,517</h3>
              <p className="text-gray-600">Total Descargas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileImage className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">4</h3>
              <p className="text-gray-600">Tipos de Archivo</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">12,450</h3>
              <p className="text-gray-600">Visualizaciones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
