import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage = ({ onBack }: AboutPageProps) => {
  const features = [
    {
      icon: "🏋️‍♂️",
      title: "Современное оборудование",
      description:
        "Новейшие тренажеры от ведущих мировых производителей для максимально эффективных тренировок",
    },
    {
      icon: "👨‍🏫",
      title: "Профессиональные тренеры",
      description:
        "Команда сертифицированных специалистов с многолетним опытом и индивидуальным подходом",
    },
    {
      icon: "🕐",
      title: "Гибкий график",
      description:
        "Работаем с 6:00 до 24:00 каждый день, чтобы вы могли тренироваться в удобное время",
    },
    {
      icon: "🎯",
      title: "Персональный подход",
      description:
        "Индивидуальные программы тренировок и питания для достижения ваших целей",
    },
    {
      icon: "🧘‍♀️",
      title: "Разнообразие программ",
      description:
        "Силовые тренировки, кардио, йога, функциональный тренинг и групповые занятия",
    },
    {
      icon: "🏆",
      title: "Результат гарантирован",
      description:
        "95% наших клиентов достигают поставленных целей в течение первых 3 месяцев",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <Button
            onClick={onBack}
            className="bg-orange-600 hover:bg-orange-700 text-white mr-6"
          >
            ← Назад
          </Button>
          <h1 className="text-5xl font-bold font-montserrat text-slate-800">
            О FIT ZONE
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-slate-800 mb-6">
                Ваш путь к совершенству
              </h2>
              <p className="text-lg text-gray-600 font-open-sans leading-relaxed mb-6">
                FIT ZONE — это не просто фитнес-клуб, это место, где рождаются
                чемпионы. Уже более 10 лет мы помогаем людям изменить свою жизнь
                через спорт и здоровый образ жизни.
              </p>
              <p className="text-lg text-gray-600 font-open-sans leading-relaxed">
                Наша миссия — сделать фитнес доступным и эффективным для
                каждого, независимо от уровня подготовки и поставленных целей.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
                alt="Фитнес-клуб"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
