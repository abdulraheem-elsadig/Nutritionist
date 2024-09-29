import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import {
  AcademicCapIcon,
  ClipboardIcon,
  PresentationChartLineIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const FeaturesSeciton = () => {
  return (
    <section className="container grid gap-12">
      <SectionHeader
        title="Features"
        subTitle="Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness."
      />
      <div className="grid gap-5">
        {features.map((feature) => (
          <InfoCard data={feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSeciton;

const features = [
  {
    id: 1,
    icon: <UserIcon className="w-6" />,
    title: "Personalized Nutrition Plans",
    description:
      "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    id: 2,
    icon: <PresentationChartLineIcon className="w-6" />,
    title: "Food Tracking and Analysis",
    description:
      "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    id: 3,
    icon: <ClipboardIcon className="w-6" />,
    title: "Meal Planning and Recipes",
    description:
      "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    id: 4,
    icon: <StarIcon className="w-6" />,
    title: "Lifestyle and Behavior Coaching",
    description:
      "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    id: 5,
    icon: <AcademicCapIcon className="w-6" />,
    title: "Nutritional Education and Workshops",
    description:
      "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];
