import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-0">
      <div className="relative h-[50vh] w-full rounded-b-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="hero"
          fill
        />
      </div>
      {/* content */}
      <div className="relative flex items-center justify-center flex-col text-center px-4 pt-20">
        <span className="text-lg text-zinc-800 border-lime-300 border-b-2  pb-2 font-semibold">
          Transform Your ❤️ Health with
        </span>
        <h1 className="text-4xl font-bold mt-2 max-w-[352px] ">
          Personalized Nutrition Coaching
        </h1>
        <p className="text-sm text-zinc-800 mt-4 ">
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        {/* action buttons */}
        <div className="flex gap-4 mt-8">
          <Button variant="default" size="lg">
            Get Start Today
          </Button>
          <Button variant="outline" size="lg">
            Book a Demo
          </Button>
        </div>

        <div className="absolute flex flex-col top-0 items-center gap-1">
          {/* avatars */}
          <div className="flex items-center -space-x-2 -translate-y-1/2 bg-white border border-lime-300 p-1.5 rounded-full">
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Placeholder"
              />
              <AvatarFallback>PH</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-lg font-semibold text-zinc-800 -translate-y-8">
            <span className="text-emerald-900 font-bold">430+</span>
            Happy Customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
