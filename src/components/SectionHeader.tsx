import React from "react";

type Props = {
  title: string;
  subTitle?: string;
};

const SectionHeader = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col gap-1.5 text-center">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-sm">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
