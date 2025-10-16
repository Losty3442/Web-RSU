import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
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
          
          {/* Páginas en desarrollo */}
          <Route path="proyectos" element={<div className="p-8 text-center">Página de Proyectos - En desarrollo</div>} />
          <Route path="documentos" element={<div className="p-8 text-center">Página de Documentos - En desarrollo</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
