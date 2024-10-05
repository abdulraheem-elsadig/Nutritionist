import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: Props) => {
  return (
    <div className="border border-lime-300 bg-lime-50 rounded-xl text-center overflow-hidden relative">
      {/* image container */}
      <div className="absolute w-full h-1/3">
        <Image
          src="/images/bg-battarn.png"
          alt="background shape"
          fill
          className="object-cover"
        />
      </div>
      {/* content */}
      <div className="z-10 flex flex-col items-center p-8  relative">
        <div className="w-16 h-16 relative ">
          <Image src="/images/logo-fade.png" alt="logo" fill />
        </div>
        <h2 className="font-semibold text-3xl mt-8 mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
