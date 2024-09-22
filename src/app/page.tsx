import BlogSection from "@/containers/home-page/blog-section";
import FeaturesSeciton from "@/containers/home-page/features-section";
import HeroSection from "@/containers/home-page/hero-section";

export default function Home() {
  return (
    <div className="grid gap-14">
      <HeroSection />
      <FeaturesSeciton />
      <BlogSection />
    </div>
  );
}
