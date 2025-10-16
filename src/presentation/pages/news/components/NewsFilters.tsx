import React from "react";
import { Button } from "@/presentation/components/ui/button";
import { newsCategories } from "@/data/newsData";

interface NewsFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const NewsFilters: React.FC<NewsFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "eventos":
        return "🎉";
      case "alianzas":
        return "🤝";
      case "voluntariado":
        return "❤️";
      case "capacitacion":
        return "📚";
      case "salud":
        return "🏥";
      case "reconocimientos":
        return "🏆";
      default:
        return "📰";
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {newsCategories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`h-10 px-4 rounded-full transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-gray-900 hover:bg-gray-800 text-white shadow-sm"
              : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
          }`}
        >
          <span className="mr-2">{getCategoryIcon(category.id)}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
};
