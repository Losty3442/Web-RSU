import React, { useState } from "react";
import { NewsGrid } from "./components/NewsGrid";
import { NewsPagination } from "./components/NewsPagination";
import { NewsFilters } from "./components/NewsFilters";
import { newsData } from "@/data/newsData";


const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const itemsPerPage = 12; // Más elementos por página para mejor aprovechamiento del espacio

  return (
    <div className="min-h-screen bg-white">
      {/* Header moderno */}
      <div className="border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Noticias DRSU
                </h1>
                <p className="text-gray-600 mt-1">
                  Mantente informado sobre nuestras actividades y proyectos
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{newsData.length} noticias disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtros modernos */}
        <div className="mb-8">
          <NewsFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Grid de noticias */}
        <NewsGrid
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          selectedCategory={selectedCategory}
        />

        {/* Paginación */}
        <div className="mt-12">
          <NewsPagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalItems={newsData.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
