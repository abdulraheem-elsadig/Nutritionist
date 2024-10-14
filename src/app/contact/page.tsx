import Bannar from "@/components/Bannar";
import PageHeader from "@/components/PageHeader";
import FormSection from "@/containers/contact-page/form-section/page";

export default function About() {
  return (
    <main className="container grid gap-14 py-8">
      <PageHeader
        title="Contact Us"
        description={`We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods`}
      />
      <FormSection />
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
