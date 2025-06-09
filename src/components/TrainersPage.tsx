import { Button } from "@/components/ui/button";
import TrainerCard from "./TrainerCard";

interface TrainersPageProps {
  onBack: () => void;
}

const TrainersPage = ({ onBack }: TrainersPageProps) => {
  const trainers = [
    {
      name: "Алексей Волков",
      specialization: "Силовые тренировки",
      experience: "8 лет",
      description:
        "Специалист по набору мышечной массы и пауэрлифтингу. Помогу достичь максимальных результатов в силовых показателях.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      name: "Марина Соколова",
      specialization: "Функциональный тренинг",
      experience: "6 лет",
      description:
        "Эксперт по функциональным тренировкам и кроссфиту. Создаю персональные программы для достижения ваших целей.",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop",
    },
    {
      name: "Дмитрий Петров",
      specialization: "Йога и растяжка",
      experience: "10 лет",
      description:
        "Мастер йоги и специалист по восстановлению. Помогу улучшить гибкость и найти баланс тела и разума.",
      image:
        "https://images.unsplash.com/photo-1506629905607-45e6f2a49c0b?w=400&h=300&fit=crop",
    },
    {
      name: "Елена Кузнецова",
      specialization: "Кардио и похудение",
      experience: "5 лет",
      description:
        "Специалист по жиросжиганию и кардиотренировкам. Создам эффективную программу для достижения идеальной фигуры.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <Button
            onClick={onBack}
            className="bg-purple-600 hover:bg-purple-700 text-white mr-6"
          >
            ← Назад
          </Button>
          <h1 className="text-5xl font-bold font-montserrat text-slate-800">
            Наши тренеры
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainersPage;
