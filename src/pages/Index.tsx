import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TrainersPage from "@/components/TrainersPage";
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
      {currentPage === "home" && <HeroSection onNavigate={handleNavigate} />}
      {currentPage === "trainers" && <TrainersPage onBack={handleBack} />}
      {currentPage === "about" && <AboutPage onBack={handleBack} />}
      {currentPage === "schedule" && <SchedulePage onBack={handleBack} />}
    </div>
  );
};

export default Index;
