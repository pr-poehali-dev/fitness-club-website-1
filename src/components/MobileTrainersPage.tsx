import { Button } from "@/components/ui/button";
import MobileTrainerCard from "./MobileTrainerCard";
import Icon from "@/components/ui/icon";

interface MobileTrainersPageProps {
  onBack: () => void;
}

const MobileTrainersPage = ({ onBack }: MobileTrainersPageProps) => {
  const trainers = [
    {
      name: "Ирина Максимовна",
      specialization: "Фитнес-директор",
      experience: "более 5 лет",
      description:
        "Фитнес-директор, эксперт-тренер тренажерного зала и студии пилатеса",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop",
    },
    {
      name: "Иван Бодров",
      specialization: "Координатор и элит-тренер",
      experience: "более 6 лет",
      description: "Координатор и элит-тренер тренажерного зала",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      name: "Алексей Волков",
      specialization: "Силовые тренировки",
      experience: "более 8 лет",
      description: "Специалист по набору мышечной массы и пауэрлифтингу",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1506629905607-45e6f2a49c0b?w=400&h=300&fit=crop",
    },
    {
      name: "Елена Кузнецова",
      specialization: "Кардио и функциональный тренинг",
      experience: "более 5 лет",
      description: "Специалист по жиросжиганию и функциональным тренировкам",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-4">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-white/50 rounded-xl"
        >
          <Icon name="ArrowLeft" size={24} className="text-gray-700" />
        </Button>
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
          <h1 className="text-3xl font-bold text-white mb-2">Тренеры</h1>
          <p className="text-white/80 text-sm">Профессиональная команда</p>
        </div>

        <Button className="bg-gray-600/80 hover:bg-gray-700/80 text-white rounded-xl w-fit px-6 py-2">
          Все специализации
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-white rounded-2xl p-1 mb-6">
        <Button className="flex-1 bg-gray-700 hover:bg-gray-800 text-white rounded-xl py-3">
          Тренера
        </Button>
        <Button
          onClick={onBack}
          className="flex-1 bg-transparent hover:bg-gray-100 text-gray-600 rounded-xl py-3"
        >
          О фитнес-клубе
        </Button>
      </div>

      {/* Trainers List */}
      <div className="space-y-1">
        {trainers.map((trainer, index) => (
          <MobileTrainerCard key={index} {...trainer} />
        ))}
      </div>
    </div>
  );
};

export default MobileTrainersPage;
