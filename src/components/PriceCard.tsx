import React from "react";
import { Button } from "./ui/button";

interface props {
  data: {
    title: string;
    subTitle: string;
    price: number;
    unit: string;
    description?: string;
    features?: { id: number; value: string }[];
    note?: string;
  };
}

const PriceCard = ({ data }: props) => {
  return (
    <div className="bg-lime-50 rounded-lg border border-lime-300 p-8 grid gap-6">
      <div>
        <h3 className="font-semibold text-xl">{data?.title}</h3>
        <span className="text-sm font-medium text-neutral-600 ">
          {data?.subTitle}
        </span>
      </div>
      {data?.features && (
        <div className="bg-lime-100 rounded-md border border-lime-300">
          {data.features.map((feature) => (
            <p
              key={feature.id}
              className="px-5 py-3 border-b border-lime-300 last:border-none"
            >
              {feature.value}
            </p>
          ))}
        </div>
      )}
      {data?.description && (
        <p className="font-medium text-sm ">{data.description}</p>
      )}
      {data?.note && (
        <p className="font-medium text-sm bg-emerald-900 text-white px-5 py-4 rounded-lg">
          {data.note}
        </p>
      )}
      <div className="flex items-center">
        <span className="font-bold text-4xl text-emerald-900">
          ${data?.price}
        </span>
        <span className="font-medium text-neutral-800">/{data?.unit}</span>
      </div>
      <Button size="lg" className="w-full">
        Choose Plan
      </Button>
    </div>
  );
};

export default PriceCard;
