"use client";
import Bannar from "@/components/Bannar";
import AchievementSection from "@/containers/about-page/achievements-section";
import Header from "@/containers/about-page/header";
import StorySection from "@/containers/about-page/story-section";

export default function About() {
  return (
    <div className="container grid gap-14 py-8">
      <Header />
      <StorySection />
      <AchievementSection />
      <Bannar data={bannar} />
    </div>
  );
}

const bannar = {
  title: "We Are Proud of Our Achievements",
  description:
    "But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.",
  btnLabel: "Book a Demo",
  action: () => {},
};
