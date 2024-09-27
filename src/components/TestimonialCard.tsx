import Image from "next/image";
import React from "react";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";

type Props = {
  data: {
    name: string;
    avatar: string;
    message: string;
  };
};

const TestimonialCard = ({ data }: Props) => {
  return (
    <div className="rounded-lg border border-lime-300 w-full">
      {/* testimonial */}
      <div className="p-6">
        <span></span>
        <p>{data.message}</p>
      </div>
      {/* user */}
      <div className="px-6 bg-lime-50 flex items-center gap-2 py-4">
        <div className="relative rounded-md w-10 h-10 overflow-hidden">
          <Image
            src={data.avatar}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-semibold">{data.name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
