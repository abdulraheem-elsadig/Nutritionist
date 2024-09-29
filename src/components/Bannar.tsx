import React from "react";
import { Button } from "./ui/button";
import ZigzagShape from "../../public/shapes/zigzag";
import LogoShap from "../../public/shapes/logoshap";

type Props = {
  data: {
    title: string;
    description: string;
    btnLabel: string;
    action: () => void;
  };
};

const Bannar = ({ data }: Props) => {
  return (
    <div className="bg-lime-50 border border-lime-300 relative overflow-hidden p-10 rounded-xl">
      <div className="absolute top-0 -start-14">
        <ZigzagShape />
      </div>
      {/* card content */}
      <div className=" text-center flex flex-col gap-5 relative z-10">
        <h3 className="font-semibold text-xl mb-2">{data.title}</h3>
        <p className="font-medium text-sm">{data.description}</p>
        <Button onClick={data.action} className="w-full" size="lg">
          {data.btnLabel}
        </Button>
      </div>
      <div className="absolute bottom-0 end-0 z-0">
        <LogoShap />
      </div>
    </div>
  );
};

export default Bannar;
