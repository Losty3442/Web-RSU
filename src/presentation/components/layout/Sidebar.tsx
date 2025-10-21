import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  FolderOpen,
  Newspaper,
  Wrench,
  Mail,
  Heart,
  Calendar,
  Award,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { useSidebar } from "../../hooks/useSidebar";
import { useNavigation } from "../../hooks/useNavigation";
import { SIDEBAR_ICONS } from "../../lib/constants";

const ICON_MAP = {
  Home,
  Users,
  FolderOpen,
  Newspaper,
  Wrench,
  Mail,
  Heart,
  Calendar,
  Award,
};

export const Sidebar: React.FC = () => {
  const { handleMouseEnter, handleMouseLeave } = useSidebar();
  const { isActiveRoute } = useNavigation();

  return (
    <motion.aside
      className="fixed left-0 top-0 z-40 h-full w-[70px] bg-primary shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-full flex-col items-center py-4">
        {/* Logo */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center">
          <img
            src="/images/logo.png"
            alt="DRSU Logo"
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-4">
          {SIDEBAR_ICONS.map((item) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            const isActive = isActiveRoute(item.href);

            return (
              <div key={item.id} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-200",
                    "hover:bg-white/10 hover:scale-110",
                    isActive
                      ? "bg-white/20 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </Link>

                {/* Tooltip */}
                <div
                  className={cn(
                    "absolute left-16 top-1/2 -translate-y-1/2 z-50",
                    "bg-gray-900 text-white text-sm px-2 py-1 rounded",
                    "whitespace-nowrap pointer-events-none",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  )}
                >
                  {item.tooltip}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
};
