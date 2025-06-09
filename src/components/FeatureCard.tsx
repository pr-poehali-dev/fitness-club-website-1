import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-orange-200">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold font-montserrat text-slate-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 font-open-sans leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
