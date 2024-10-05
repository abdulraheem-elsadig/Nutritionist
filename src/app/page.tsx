import BlogSection from "@/containers/home-page/blog-section";
import FeaturesSeciton from "@/containers/home-page/features-section";
import HeroSection from "@/containers/home-page/hero-section";
import PricingSeciton from "@/containers/home-page/pricing-section";
import TestimonialSection from "@/containers/home-page/testimonials-section";

export default function Home() {
  return (
    <main className="grid gap-14">
      <HeroSection />
      <FeaturesSeciton />
      <BlogSection />
      <TestimonialSection />
      <PricingSeciton />
    </main>
  );
}
