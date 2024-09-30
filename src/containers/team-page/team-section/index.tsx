import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <div className="border border-lime-300 bg-lime-50 rounded-xl">
      <div className="p-8 flex flex-col ">
        <div className="w-16 h-16 relative">
          <Image src="/images/logo-fade.png" alt="logo" fill />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
