"use client";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <section className="container grid gap-12">
      <SectionHeader
        title="Our Testimonials"
        subTitle="Our satisfied clients share their success stories and experiences on their journey to better health and well-being."
      />

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
        pagination={{
          el: ".pagination",
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".testimonial-next-btn",
          prevEl: ".testimonial-prev-btn",
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-5 w-full items-center justify-center ">
        <Button variant="outline" size="icon" className="testimonial-next-btn">
          <ChevronLeftIcon className="w-7 h-7" />
        </Button>
        <div className="pagination gap-1 flex max-w-fit" />
        <Button variant="outline" size="icon" className="testimonial-prev-btn ">
          <ChevronRightIcon className="w-7 h-7" />
        </Button>
      </div>
    </section>
  );
};

export default TestimonialSection;

const testimonials = [
  {
    id: 1,
    name: "Jennifer Anderson",
    avatar:
      "https://images.unsplash.com/photo-1666063482514-5486c845aca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    message:
      "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  },
  {
    id: 2,
    name: "Jennifer Anderson",
    avatar:
      "https://images.unsplash.com/photo-1666063482514-5486c845aca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    message:
      "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  },
];
