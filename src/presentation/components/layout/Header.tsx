import React from "react";
import { motion } from "framer-motion";
import { Menu, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface HeaderProps {
  onMenuToggle: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, className }) => {
  return (
    <motion.header
      className={cn(
        "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/unplogo.png"
              alt="UNP Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">
                Universidad Nacional de Piura
              </h1>
              <p className="text-sm text-gray-600">
                Dirección de Responsabilidad Social Universitaria
              </p>
            </div>
          </div>

          {/* Redes sociales y menú */}
          <div className="flex items-center space-x-4">
            {/* Redes sociales - solo visible en desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="https://facebook.com/unp.edu.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/unp_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/unp_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Botón de menú - solo visible en mobile/tablet */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="text-primary hover:bg-primary/10 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
