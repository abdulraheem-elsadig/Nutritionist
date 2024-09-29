import React from "react";
import { Button } from "./ui/button";

const PriceCard = () => {
  return (
    <div className="bg-lime-50 rounded-lg border border-lime-300 p-8 grid gap-6">
      <div>
        <h3 className="font-semibold text-xl">Premium Plan</h3>
        <span className="text-sm font-medium text-neutral-600 ">
          Up to 50% off on Yearly Plan
        </span>
      </div>
      <p className="font-medium text-sm ">
        Upgrade to our Premium Plan for enhanced features. In addition to the
        Basic Plan, you&quot;ll receive video consultations, priority support,
        and personalized recipe recommendations.
      </p>
      <div className="flex items-center">
        <span className="font-bold text-4xl text-emerald-900">$79</span>
        <span className="font-medium text-neutral-800">/month</span>
      </div>
      <Button size="lg" className="w-full">
        Choose Plan
      </Button>
    </div>
  );
};

export default PriceCard;
