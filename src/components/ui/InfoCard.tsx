import React, { ReactNode } from "react";

type Props = {
  data: {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
  };
};

const InfoCard = ({ data }: Props) => {
  return (
    <div className="bg-lime-50 border border-s-lime-200 p-8 rounded-xl">
      <div className="flex gap-4 items-center">
        <div className="bg-lime-200 min-w-12 h-12 flex items-center justify-center rounded-md ">
          {data.icon}
        </div>
        <h1 className="text-lg font-semibold">{data.title}</h1>
      </div>
      <p className="mt-4 text-sm">{data.description}</p>
    </div>
  );
};

export default InfoCard;
