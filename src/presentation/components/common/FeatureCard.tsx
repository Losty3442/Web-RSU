import React from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
  className?: string;
}

export const FeatureCardComponent: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={className}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 text-center">
          <div
            className={cn(
              "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
              color
            )}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
