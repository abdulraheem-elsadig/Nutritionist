import SectionHeader from "@/components/SectionHeader";
import StoryCard from "@/components/StoryCard";
import React from "react";

const StorySection = () => {
  return (
    <section>
      <SectionHeader
        title="Our Story"
        subTitle="Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey."
      />
      <div className="flex flex-col mt-12 border border-lime-300 rounded-lg overflow-hidden">
        {data.map((item) => (
          <StoryCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default StorySection;

const data = [
  {
    id: 1,
    cover:
      "https://images.unsplash.com/photo-1576921876279-4e1b7304015d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inspiring Transformations Story",
    description:
      "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.",
    date: "July 1, 2025",
  },
  {
    id: 2,
    cover: "",
    title: "Recognition and Accolades Story",
    description:
      "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.",
    date: "March 10, 2023",
  },
  {
    id: 3,
    cover: "",
    title: "Continued Growth Story",
    description:
      "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.",
    date: "November 2, 2021",
  },
  {
    id: 4,
    cover: "",
    title: "Collaborating for Success Story",
    description:
      "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.",
    date: "July 15, 2019",
  },
  {
    id: 5,
    cover: "",
    title: "Enhanced Support Story",
    description:
      "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.",
    date: "April 1, 2018",
  },
  {
    id: 6,
    cover: "",
    title: "Innovating for Clients Story",
    description:
      "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.",
    date: "January 20, 2017",
  },
  {
    id: 7,
    cover: "",
    title: "Celebrating Success Stories",
    description:
      "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
    date: "September 5, 2015",
  },
  {
    id: 8,
    cover: "",
    title: "Expanding Reach Story",
    description:
      "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.",
    date: "June 10, 2014",
  },
  {
    id: 9,
    cover: "",
    title: "Research and Expertise Story",
    description:
      "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.",
    date: "March 15, 2012",
  },
  {
    id: 10,
    cover: "",
    title: "The Inception Story",
    description:
      "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.",
    date: "January 1, 2010",
  },
];
