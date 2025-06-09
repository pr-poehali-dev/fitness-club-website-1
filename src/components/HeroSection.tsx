import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (page: "trainers" | "about" | "schedule") => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 font-montserrat bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          FIT ZONE
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-open-sans">
          Твой путь к идеальной форме начинается здесь
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate("trainers")}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            🏋️‍♂️ Тренеры
          </Button>

          <Button
            onClick={() => onNavigate("about")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            💪 О фитнес-клубе
          </Button>

          <Button
            onClick={() => onNavigate("schedule")}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            📅 Свободные даты
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
