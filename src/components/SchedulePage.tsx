import { Button } from "@/components/ui/button";
import ScheduleCard from "./ScheduleCard";

interface SchedulePageProps {
  onBack: () => void;
}

const SchedulePage = ({ onBack }: SchedulePageProps) => {
  const schedule = [
    {
      trainerName: "Алексей Волков",
      date: "15 января",
      time: "09:00-10:00",
      type: "Силовая тренировка",
      available: true,
    },
    {
      trainerName: "Марина Соколова",
      date: "15 января",
      time: "10:00-11:00",
      type: "Функциональный тренинг",
      available: false,
    },
    {
      trainerName: "Дмитрий Петров",
      date: "15 января",
      time: "11:00-12:00",
      type: "Йога",
      available: true,
    },
    {
      trainerName: "Елена Кузнецова",
      date: "15 января",
      time: "12:00-13:00",
      type: "Кардио тренировка",
      available: true,
    },
    {
      trainerName: "Алексей Волков",
      date: "16 января",
      time: "09:00-10:00",
      type: "Силовая тренировка",
      available: false,
    },
    {
      trainerName: "Марина Соколова",
      date: "16 января",
      time: "10:00-11:00",
      type: "Кроссфит",
      available: true,
    },
    {
      trainerName: "Дмитрий Петров",
      date: "16 января",
      time: "18:00-19:00",
      type: "Вечерняя йога",
      available: true,
    },
    {
      trainerName: "Елена Кузнецова",
      date: "16 января",
      time: "19:00-20:00",
      type: "HIIT тренировка",
      available: false,
    },
    {
      trainerName: "Алексей Волков",
      date: "17 января",
      time: "08:00-09:00",
      type: "Утренняя силовая",
      available: true,
    },
    {
      trainerName: "Марина Соколова",
      date: "17 января",
      time: "17:00-18:00",
      type: "Функциональный тренинг",
      available: true,
    },
    {
      trainerName: "Дмитрий Петров",
      date: "17 января",
      time: "20:00-21:00",
      type: "Растяжка",
      available: true,
    },
    {
      trainerName: "Елена Кузнецова",
      date: "17 января",
      time: "21:00-22:00",
      type: "Кардио микс",
      available: false,
    },
  ];

  const availableSlots = schedule.filter((slot) => slot.available).length;
  const totalSlots = schedule.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <Button
            onClick={onBack}
            className="bg-green-600 hover:bg-green-700 text-white mr-6"
          >
            ← Назад
          </Button>
          <h1 className="text-5xl font-bold font-montserrat text-slate-800">
            Расписание тренировок
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{availableSlots}</div>
              <div className="text-green-100">Свободных слотов</div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">
                {totalSlots - availableSlots}
              </div>
              <div className="text-red-100">Занятых слотов</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{totalSlots}</div>
              <div className="text-purple-100">Всего слотов</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {schedule.map((slot, index) => (
            <ScheduleCard key={index} {...slot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
