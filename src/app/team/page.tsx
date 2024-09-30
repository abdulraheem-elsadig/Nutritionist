"use client";
import Bannar from "@/components/Bannar";
import TeamSection from "@/containers/team-page/team-section";

export default function About() {
  return (
    <div className="container grid gap-14 py-8">
      <TeamSection />
      <Bannar data={bannar} />
    </div>
  );
}

const bannar = {
  title: "Join Our Team",
  description:
    "We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.",
  btnLabel: "Apply Now",
  action: () => {},
};
