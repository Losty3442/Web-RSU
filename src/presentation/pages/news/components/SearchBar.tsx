import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/presentation/components/ui/input";
import { Button } from "@/presentation/components/ui/button";
import { Badge } from "@/presentation/components/ui/badge";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: string[]) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilterChange,
  placeholder = "Buscar noticias...",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterToggle = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFilterChange([]);
  };

  const quickFilters = [
    { id: "recientes", label: "Recientes", icon: "🕒" },
    { id: "populares", label: "Populares", icon: "🔥" },
    { id: "destacadas", label: "Destacadas", icon: "⭐" },
  ];

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-blue-600 hover:bg-blue-700"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </form>

      {/* Filtros rápidos */}
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">Filtros:</span>
        <div className="flex gap-2">
          {quickFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={
                selectedFilters.includes(filter.id) ? "default" : "outline"
              }
              size="sm"
              onClick={() => handleFilterToggle(filter.id)}
              className={`h-8 px-3 rounded-full text-xs ${
                selectedFilters.includes(filter.id)
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
              }`}
            >
              <span className="mr-1">{filter.icon}</span>
              {filter.label}
            </Button>
          ))}
        </div>
        {selectedFilters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-8 px-2 text-xs text-gray-500 hover:text-gray-700"
          >
            <X className="w-3 h-3 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      {/* Filtros activos */}
      {selectedFilters.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Activos:</span>
          <div className="flex gap-1">
            {selectedFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="text-xs px-2 py-1 bg-blue-100 text-blue-800"
              >
                {quickFilters.find((f) => f.id === filter)?.label}
                <button
                  onClick={() => handleFilterToggle(filter)}
                  className="ml-1 hover:text-blue-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

