import PriceCard from "@/components/PriceCard";
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const PricingSeciton = () => {
  return (
    <section className="container">
      <SectionHeader
        title="Our Pricing"
        subTitle="We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources"
      />

      {/* switch */}
      <div className="mt-12 w-full flex items-center justify-center">
        <Tabs defaultValue="Monthly">
          <TabsList>
            <TabsTrigger value="Monthly">Monthly</TabsTrigger>
            <TabsTrigger value="Yearly">Yearly</TabsTrigger>
          </TabsList>
          <p className="text-center mt-2 text-neutral-600">
            Save 50% on Yearly
          </p>
        </Tabs>
      </div>

      {/* price cards */}
      <div className="grid gap-5 mt-8">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  );
};

export default PricingSeciton;
