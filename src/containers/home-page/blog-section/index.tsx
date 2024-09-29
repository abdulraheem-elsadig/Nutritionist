import BlogCard from "@/components/BlogCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const BlogSection = () => {
  return (
    <section className="container grid gap-12">
      <SectionHeader
        title="Our Blogs"
        subTitle="Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.   "
      />
      {blogs.map((blog) => (
        <BlogCard data={blog} key={blog.id} />
      ))}
    </section>
  );
};

export default BlogSection;

const blogs = [
  {
    id: 1,
    category: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    cover:
      "https://images.unsplash.com/photo-1503919436801-81e3f881d0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkcmF0aW9ufGVufDB8fDB8fHww",
    subtitle:
      "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    createdAt: "23 May 2023",
    readTime: "5 min",
    author: {
      avatar:
        "https://images.unsplash.com/photo-1666452055515-adade17dfeb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Emily Johnson",
    },
  },
  {
    id: 2,
    category: "Understanding Macronutrients",
    title: "Cultivating a Healthy Relationship with Food",
    cover:
      "https://images.unsplash.com/photo-1560713781-d00f6c18f388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    subtitle:
      "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    createdAt: "23 May 2023",
    readTime: "5 min",
    author: {
      avatar:
        "https://images.unsplash.com/photo-1684893834490-ebea1517c264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Sarah Thompson",
    },
  },
  {
    id: 3,
    category: "Healthy Snacks on the Go",
    title: "Quick and Nutritious Options",
    cover:
      "https://images.unsplash.com/photo-1589752882051-69148918f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    subtitle:
      "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    createdAt: "23 May 2023",
    readTime: "5 min",
    author: {
      avatar:
        "https://images.unsplash.com/photo-1628646435405-09fd8f4be99d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhpamFifGVufDB8fDB8fHww",
      name: "Emily Johnson",
    },
  },
  {
    id: 4,
    category: "Understanding Macronutrients",
    title: "Carbohydrates, Proteins, and Fats",
    cover:
      "https://images.unsplash.com/photo-1503919436801-81e3f881d0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkcmF0aW9ufGVufDB8fDB8fHww",
    subtitle:
      "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    createdAt: "23 May 2023",
    readTime: "5 min",
    author: {
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
      name: "Mark Wilson",
    },
  },
];
