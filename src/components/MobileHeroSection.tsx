import { Button } from "@/components/ui/button";

interface MobileHeroSectionProps {
  onNavigate: (page: "trainers" | "about" | "schedule") => void;
}

const MobileHeroSection = ({ onNavigate }: MobileHeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-4">
        <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl p-6 mb-6 min-h-[200px] flex flex-col justify-between">
        <div className="absolute top-6 right-6 flex gap-4">
          <div className="w-8 h-8 bg-gray-500 rounded-full opacity-70"></div>
          <div className="w-8 h-8 bg-gray-500 rounded-lg opacity-70"></div>
          <div className="w-8 h-8 bg-gray-500 rounded-lg opacity-70"></div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Йога</h1>
          <p className="text-white/80 text-sm">Индивидуальная</p>
        </div>

        <Button
          onClick={() => onNavigate("schedule")}
          className="bg-gray-600/80 hover:bg-gray-700/80 text-white rounded-xl w-fit px-6 py-2"
        >
          Свободные даты
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-white rounded-2xl p-1 mb-6">
        <Button
          onClick={() => onNavigate("trainers")}
          className="flex-1 bg-gray-700 hover:bg-gray-800 text-white rounded-xl py-3"
        >
          Тренера
        </Button>
        <Button
          onClick={() => onNavigate("about")}
          className="flex-1 bg-transparent hover:bg-gray-100 text-gray-600 rounded-xl py-3"
        >
          О фитнес-клубе
        </Button>
      </div>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-16 mr-4">
          <div className="bg-white rounded-2xl p-3 mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-lg mb-3"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="bg-gray-700 rounded-2xl p-3">
            <div className="w-8 h-8 bg-white rounded-lg mb-1"></div>
            <div className="text-white text-xs text-center">Избранное</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">🏋️‍♂️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">fitEnergy</h2>
            <p className="text-gray-600">Выберите раздел для продолжения</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
