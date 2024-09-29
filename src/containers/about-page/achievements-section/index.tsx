import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import {
  ArrowTrendingUpIcon,
  ClipboardIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const AchievementSection = () => {
  return (
    <section>
      <SectionHeader
        title="Company Achievements"
        subTitle="At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements"
      />
      <div className="flex flex-col gap-5 mt-12">
        {data.map((item) => (
          <InfoCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;

const data = [
  {
    id: 1,
    icon: <ArrowTrendingUpIcon className="w-6" />,
    title: "10,000+ Transformations",
    description:
      "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
  },
  {
    id: 2,
    icon: <SparklesIcon className="w-6" />,
    title: "Recognition for Excellence",
    description:
      "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
  },
  {
    id: 3,
    icon: <UserGroupIcon className="w-6" />,
    title: "Positive Clients Reviews",
    description:
      "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
  },
  {
    id: 4,
    icon: <ClipboardIcon className="w-6" />,
    title: "Collaborate With Top Health Experts.",
    description:
      "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
  },
];
