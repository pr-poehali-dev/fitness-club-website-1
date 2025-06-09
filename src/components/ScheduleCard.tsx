import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ScheduleCardProps {
  trainerName: string;
  date: string;
  time: string;
  type: string;
  available: boolean;
}

const ScheduleCard = ({
  trainerName,
  date,
  time,
  type,
  available,
}: ScheduleCardProps) => {
  return (
    <Card
      className={`transition-all duration-300 hover:scale-105 ${
        available
          ? "bg-gradient-to-br from-green-50 to-green-100 border-green-300 hover:shadow-xl"
          : "bg-gradient-to-br from-red-50 to-red-100 border-red-300 opacity-75"
      }`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-montserrat text-slate-800 flex items-center justify-between">
          {trainerName}
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              available ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {available ? "Свободно" : "Занято"}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-slate-600">
          <span className="mr-2">📅</span>
          <span className="font-medium">{date}</span>
        </div>

        <div className="flex items-center text-slate-600">
          <span className="mr-2">⏰</span>
          <span className="font-medium">{time}</span>
        </div>

        <div className="flex items-center text-slate-600">
          <span className="mr-2">🏋️‍♂️</span>
          <span className="font-medium">{type}</span>
        </div>

        {available && (
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
            Записаться
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
