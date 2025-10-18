import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import ScrollToTop from "./ScrollToTop";
import { MenuOverlay } from "./MenuOverlay";
import { useNavigation } from "../../hooks/useNavigation";
import { cn } from "../../lib/utils";

export const Layout: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - solo visible en desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          "lg:ml-[70px]" // Margen izquierdo para el sidebar en desktop
        )}
      >
        {/* Header */}
        <ScrollToTop />
        <Header onMenuToggle={toggleMenu} />

        {/* Page content */}
        <main className="relative">
          <Outlet />
        </main>
      </div>

      {/* Menu Overlay - solo en mobile/tablet */}
      <div className="lg:hidden">
        <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </div>
  );
};
