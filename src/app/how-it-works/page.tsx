"use client";

import Bannar from "@/components/Bannar";
import PageHeader from "@/components/PageHeader";
import HowItWorksSection from "@/containers/how-it-works-page/how-it-works-section";

export default function About() {
  return (
    <main className="container grid gap-14 py-8">
      <PageHeader
        title="Your Journey to Health and Wellness"
        description={`At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:`}
      />
      <HowItWorksSection />
      <Bannar
        data={{
          title:
            "Are you ready to embark on a transformative journey towards better health and wellness?",
          description:
            "Join us at Nutritionist and let us guide you on the path to a healthier and happier you.",
          btnLabel: "Join Us Now",
        }}
      />
    </main>
  );
}
