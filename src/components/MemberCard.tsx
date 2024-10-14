import Image from "next/image";
import React from "react";

type Props = {
  data: {
    image: string;
    name: string;
    role: string;
  };
};

const MemberCard = ({ data }: Props) => {
  return (
    <div className="relative overflow-hidden pb-10">
      {/* image container */}
      <div className="h-[400px] w-fullrounded-xl bg-lime-200 rounded-xl overflow-hidden relative">
        <Image src="/images/card-bg.png" fill alt="background" />
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>
      <div className=" bg-lime-50 w-9/12 absolute bottom-0 p-5 rounded-tr-2xl">
        <p className="font-semibold text-xl">{data.name}</p>
        <p>{data.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
