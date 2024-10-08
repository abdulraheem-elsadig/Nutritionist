import PageHeader from "@/components/PageHeader";
import PricingSeciton from "@/containers/pricing-page";
import FaqSection from "@/containers/pricing-page/faq-section";
import TableSection from "@/containers/pricing-page/table-section";

export default function About() {
  return (
    <main className="container grid gap-14 py-8">
      <PageHeader
        title="Our Pricing"
        description={`At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle`}
      />
      <PricingSeciton />
      <TableSection />
      <FaqSection />
    </main>
  );
}
