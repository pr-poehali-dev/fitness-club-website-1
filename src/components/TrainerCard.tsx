import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrainerCardProps {
  name: string;
  specialization: string;
  experience: string;
  description: string;
  image: string;
}

const TrainerCard = ({
  name,
  specialization,
  experience,
  description,
  image,
}: TrainerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-montserrat text-slate-800">
          {name}
        </CardTitle>
        <p className="text-purple-600 font-semibold">{specialization}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-orange-600 font-medium">
          <span className="mr-2">⏰</span>
          <span>Опыт: {experience}</span>
        </div>

        <p className="text-gray-600 leading-relaxed font-open-sans">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
