import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useNavigation } from "../../hooks/useNavigation";
import { NAVIGATION_ITEMS } from "../../lib/constants";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const { isActiveRoute } = useNavigation();
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm p-0 h-full w-full"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="h-full w-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/logo.png"
                    alt="DRSU Logo"
                    className="h-12 w-12 object-contain"
                  />
                  <div className="text-white">
                    <h2 className="text-xl font-bold">DRSU</h2>
                    <p className="text-sm text-white/70">
                      Universidad Nacional de Piura
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Menu */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <div key={item.id} className="space-y-1">
                      {item.children ? (
                        <>
                          <button
                            onClick={() => toggleExpanded(item.id)}
                            className={cn(
                              "w-full flex items-center justify-between p-3 rounded-lg",
                              "text-white hover:bg-white/10 transition-colors duration-200",
                              "text-left font-medium"
                            )}
                          >
                            <span>{item.label}</span>
                            <motion.div
                              animate={{
                                rotate: expandedItems.has(item.id) ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedItems.has(item.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 space-y-1 border-l border-white/20 pl-4">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.id}
                                      to={child.href}
                                      onClick={handleLinkClick}
                                      className={cn(
                                        "flex items-center p-2 rounded-lg transition-colors duration-200",
                                        "text-white/80 hover:text-white hover:bg-white/10",
                                        isActiveRoute(child.href) &&
                                          "bg-white/20 text-white font-medium"
                                      )}
                                    >
                                      <ChevronRight className="h-4 w-4 mr-2" />
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "flex items-center p-3 rounded-lg transition-colors duration-200",
                            "text-white hover:bg-white/10 font-medium",
                            isActiveRoute(item.href) && "bg-white/20"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="text-center text-white/60 text-sm">
                  <p>&copy; 2024 Universidad Nacional de Piura</p>
                  <p>Dirección de Responsabilidad Social Universitaria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
