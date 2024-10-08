import PriceCard from "@/components/PriceCard";
import React from "react";

const PricingSeciton = () => {
  return (
    <section>
      <div className="flex gap-5 flex-col">
        {prices.map((item) => (
          <PriceCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default PricingSeciton;

const prices = [
  {
    id: 1,
    title: "Basic Plan",
    subTitle: "Up to 50% off on Yearly Plan",
    price: 49,
    unit: "month",
    features: [
      {
        id: 1,
        value:
          "Personalized nutrition plan tailored to your goals and dietary preferences.",
      },
      {
        id: 2,
        value:
          "Access to our mobile app for convenient meal tracking and progress monitoring.",
      },
      {
        id: 3,
        value: "Email support to address your questions and concerns.",
      },
      {
        id: 4,
        value:
          "Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.",
      },
    ],
  },
  {
    id: 2,
    title: "Premium Plan",
    subTitle: "Up to 50% off on Yearly Plan",
    price: 79,
    unit: "month",
    features: [
      {
        id: 1,
        value: "All the features included in the Basic Plan.",
      },
      {
        id: 2,
        value:
          "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.",
      },
      {
        id: 3,
        value: "Recipe recommendations and meal planning assistance.",
      },
      {
        id: 4,
        value:
          "Priority email support for quicker responses to your inquiries.",
      },
      {
        id: 5,
        value:
          "Educational resources and guides to deepen your understanding of nutrition and healthy habits.",
      },
    ],
  },
  {
    id: 1,
    title: "Ultimate Plan",
    subTitle: "Up to 50% off on Yearly Plan",
    price: 99,
    unit: "month",
    note: "The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.",
    features: [
      {
        id: 1,
        value: "All the features included in the Plus Plan.",
      },
      {
        id: 2,
        value:
          "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
      },
      {
        id: 3,
        value:
          "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
      },
      {
        id: 4,
        value:
          "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
      },
      {
        id: 5,
        value: "Priority email and phone support for immediate assistance.",
      },
    ],
  },
];
