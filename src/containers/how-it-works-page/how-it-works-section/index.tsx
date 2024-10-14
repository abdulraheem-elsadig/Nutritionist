import InfoCard from "@/components/ui/InfoCard";
import {
  AcademicCapIcon,
  ClipboardIcon,
  FlagIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const HowItWorksSection = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h3 className="font-bold text-3xl">How It Works</h3>
        <p>
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here&apos;s how it works
        </p>
      </div>
      <div className="grid gap-7">
        {data.map((item, index) => (
          <div key={item.id} className="pt-11 relative">
            <p className="font-bold text-7xl text-emerald-700 absolute top-0 start-1 -z-10">
              {String(index + 1).padStart(2, "0")}
            </p>
            <InfoCard data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

const data = [
  {
    id: 1,
    icon: <FlagIcon className="w-7" />,
    title: "Initial Consultation",
    description:
      "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.",
  },
  {
    id: 2,
    icon: <ShoppingBagIcon className="w-7" />,
    title: "Assessing Your Needs",
    description:
      "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.",
  },
  {
    id: 3,
    icon: <ClipboardIcon className="w-7" />,
    title: "Personalized Nutrition Plan",
    description:
      "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing.",
  },
  {
    id: 4,
    icon: <AcademicCapIcon className="w-7" />,
    title: "Assessing Your Needs",
    description:
      "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.",
  },
];
