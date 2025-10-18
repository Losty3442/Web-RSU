import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './presentation/components/ui/sonner';
import { queryClient } from './presentation/lib/queryClient';
import { AuthProvider } from './presentation/context/AuthContext';
import { ProtectedRoute } from './presentation/components/auth/ProtectedRoute';
import { Layout } from './presentation/components/layout/Layout';
import { HomePage } from './presentation/pages/home/HomePage';
import { AboutPage } from './presentation/pages/about/AboutPage';

// Documentos de Gestión
import RecognitionPage from './presentation/pages/recognition';
import RegulationsPage from './presentation/pages/regulations';
import PoiPage from './presentation/pages/poi';

// Herramientas
import CoursesPage from './presentation/pages/courses';
import VideosPage from './presentation/pages/videos';
import PresentationsPage from './presentation/pages/presentations';

// Nosotros
import TeamPage from './presentation/pages/team';
import MissionPage from './presentation/pages/mission';
import WhatIsRsuPage from './presentation/pages/what-is-rsu';
import LocationPage from './presentation/pages/location';
import VisionPage from './presentation/pages/vision';
import AlliancesPage from './presentation/pages/alliances';

// Páginas Principales
import ContactPage from './presentation/pages/contact';
import NewsPage from './presentation/pages/news';
import NewsDetailPage from './presentation/pages/news-detail';
import VolunteerPage from './presentation/pages/volunteer';
import CreditsPage from './presentation/pages/credits';

// Actividades
import ActivitiesPage from './presentation/pages/activities';
import VIIIEnarsuPage from './presentation/pages/activities/viii-enarsu';
import ActividadesRsuPage from './presentation/pages/activities/actividades-rsu';
import IniciativasDrsuPage from './presentation/pages/activities/iniciativas-drsu';
import ProyectosDrsuPage from './presentation/pages/activities/proyectos-drsu';

// Dashboard Admin
import LoginPage from './presentation/pages/dashboard/login';
import DashboardLayout from './presentation/pages/dashboard/components/DashboardLayout';
import DashboardHome from './presentation/pages/dashboard';
import NewsManagement from './presentation/pages/dashboard/news';
import CreateNewsPage from './presentation/pages/dashboard/news/new';
import EditNewsPage from './presentation/pages/dashboard/news/edit';
import DocumentsManagement from './presentation/pages/dashboard/documents';
import CreateDocumentPage from './presentation/pages/dashboard/documents/new';
import EditDocumentPage from './presentation/pages/dashboard/documents/edit';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/admin/login" element={<LoginPage />} />
            
            {/* Rutas principales con layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="acerca-de" element={<AboutPage />} />
              
              {/* Documentos de Gestión */}
              <Route path="reconocimiento" element={<RecognitionPage />} />
              <Route path="reglamento" element={<RegulationsPage />} />
              <Route path="poi" element={<PoiPage />} />
              
              {/* Herramientas */}
              <Route path="cursos" element={<CoursesPage />} />
              <Route path="videos" element={<VideosPage />} />
              <Route path="presentaciones" element={<PresentationsPage />} />
              
              {/* Nosotros */}
              <Route path="team" element={<TeamPage />} />
              <Route path="mission" element={<MissionPage />} />
              <Route path="what-is-rsu" element={<WhatIsRsuPage />} />
              <Route path="location" element={<LocationPage />} />
              <Route path="vision" element={<VisionPage />} />
              <Route path="alianzas" element={<AlliancesPage />} />
              
              {/* Páginas Principales */}
              <Route path="contacto" element={<ContactPage />} />
              <Route path="noticias" element={<NewsPage />} />
              <Route path="noticias/:id" element={<NewsDetailPage />} />
              <Route path="voluntariado" element={<VolunteerPage />} />
              <Route path="creditos" element={<CreditsPage />} />
              
              {/* Actividades */}
              <Route path="actividades" element={<ActivitiesPage />} />
              <Route path="actividades/viii-enarsu" element={<VIIIEnarsuPage />} />
              <Route path="actividades/actividades-rsu" element={<ActividadesRsuPage />} />
              <Route path="actividades/iniciativas-drsu" element={<IniciativasDrsuPage />} />
              <Route path="actividades/proyectos-drsu" element={<ProyectosDrsuPage />} />
              
              {/* Páginas en desarrollo */}
              <Route path="proyectos" element={<div className="p-8 text-center">Página de Proyectos - En desarrollo</div>} />
              <Route path="documentos" element={<div className="p-8 text-center">Página de Documentos - En desarrollo</div>} />
            </Route>

            {/* Rutas del dashboard protegidas */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardHome />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/news" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <NewsManagement />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/news/new" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateNewsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/news/:id/edit" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <EditNewsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/documents" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DocumentsManagement />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/documents/new" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateDocumentPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/documents/:id/edit" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <EditDocumentPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
