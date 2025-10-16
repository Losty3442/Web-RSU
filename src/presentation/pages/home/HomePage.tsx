import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { HealthyUniversitySection } from "./components/HealthyUniversitySection";
import { VolunteerSection } from "./components/VolunteerSection";
import { NewsSection } from "./components/NewsSection";
import { AlliancesSection } from "./components/AlliancesSection";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <HealthyUniversitySection />
      <VolunteerSection />
      <NewsSection />
      <AlliancesSection />
    </div>
  );
};
