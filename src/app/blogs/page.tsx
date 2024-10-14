import PageHeader from "@/components/PageHeader";
import BlogsListSection from "@/containers/blogs-page/blogs-list-section";

export default function About() {
  return (
    <main className="container grid gap-14 py-8">
      <PageHeader
        title="Our Blogs"
        description={`Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.`}
      />
      <BlogsListSection />
    </main>
  );
}
