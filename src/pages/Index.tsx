import { useState } from "react";
import MobileHeroSection from "@/components/MobileHeroSection";
import MobileTrainersPage from "@/components/MobileTrainersPage";
import AboutPage from "@/components/AboutPage";
import SchedulePage from "@/components/SchedulePage";

type PageType = "home" | "trainers" | "about" | "schedule";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (page: "trainers" | "about" | "schedule") => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen">
      {currentPage === "home" && (
        <MobileHeroSection onNavigate={handleNavigate} />
      )}
      {currentPage === "trainers" && <MobileTrainersPage onBack={handleBack} />}
      {currentPage === "about" && <AboutPage onBack={handleBack} />}
      {currentPage === "schedule" && <SchedulePage onBack={handleBack} />}
    </div>
  );
};

export default Index;
