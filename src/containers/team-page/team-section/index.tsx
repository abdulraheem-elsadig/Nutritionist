import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <div className="grid gap-8">
      <PageHeader
        title="Meet Our Team of Experts"
        description="
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
      "
      />
      <div className="grid gap-4">
        {members.map((member) => (
          <MemberCard data={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

const members = [
  {
    id: 1,
    image: "/images/agent.png",
    name: "Sarah Mitchell",
    role: "Founder and CEO",
  },
  {
    id: 1,
    image: "/images/agent.png",
    name: "Sarah Mitchell",
    role: "Founder and CEO",
  },
  {
    id: 1,
    image: "/images/agent.png",
    name: "Sarah Mitchell",
    role: "Founder and CEO",
  },
];
