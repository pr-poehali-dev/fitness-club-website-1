import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileTrainerCardProps {
  name: string;
  specialization: string;
  experience: string;
  description: string;
  rating: number;
  image: string;
}

const MobileTrainerCard = ({
  name,
  specialization,
  experience,
  description,
  rating,
  image,
}: MobileTrainerCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white rounded-2xl shadow-sm border-0 mb-4 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-16 h-16 bg-gray-200 rounded-2xl flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-100"
              >
                <Icon name="Heart" size={20} className="text-gray-400" />
              </Button>
            </div>

            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {specialization}, эксперт-тренер тренажерного зала и студии
              пилатеса
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Опыт работы в фитнес-индустрии: {experience}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(rating)}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileTrainerCard;
