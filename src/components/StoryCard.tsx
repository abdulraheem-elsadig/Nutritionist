import Image from "next/image";
import React from "react";

type Props = {
  data: {
    cover: string;
    title: string;
    description: string;
    date: string;
  };
};

const StoryCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col bg-lime-50">
      <div className="relative w-full h-52">
        <Image
          src="https://images.unsplash.com/photo-1686665255357-729f13637a37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHx3b3Jrb3V0JTIwdHJhbnNmb3JtYXRpb258ZW58MHx8MHx8fDA%3D"
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 flex flex-col gap-5 border-t-8 border-lime-300">
        <h3 className="font-semibold text-xl border-b-4 border-lime-300 pb-2">
          {data.title}
        </h3>
        <p className="font-medium text-sm">{data.description}</p>
        <span className="font-medium text-sm">{data.date}</span>
      </div>
    </div>
  );
};

export default StoryCard;
