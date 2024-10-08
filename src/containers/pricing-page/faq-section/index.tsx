"use client";

import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <SectionHeader
        title="FAQ"
        subTitle="We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey."
      />

      <div className="flex flex-col gap-5 mt-12">
        <Accordion
          type="single"
          collapsible
          className="space-y-2 bg-lime-50 px-7 py-2 rounded-lg border border-lime-300"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#e0dfd8]"
            >
              <AccordionTrigger
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="hover:no-underline"
              >
                <span className="text-left font-semibold m-1">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-lime-50 border-lime-300 border rounded-xl py-12 px-6 flex flex-col gap-7 text-center items-center">
          <Image src="/Logo.png" alt="logo" width={80} height={80} />
          <div>
            <h3 className="font-semibold text-xl">Ask your question</h3>
            <p>Feel Free to Ask questions on anytime</p>
          </div>
          <Button>Ask A Question</Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

const faqs = [
  {
    question: "What is personalized nutrition coaching?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    question: "How can nutrition coaching help me lose weight?",
    answer:
      "Nutrition coaching can help you lose weight by creating a personalized meal plan that fits your calorie needs and nutritional requirements. Your coach will guide you on portion control, healthy food choices, and sustainable eating habits.",
  },
  {
    question: "Can I still enjoy my favorite foods while on a nutrition plan?",
    answer:
      "Yes, a good nutrition plan should be flexible and allow for your favorite foods in moderation. Your coach will help you incorporate these foods into your plan while maintaining a balanced diet.",
  },
  {
    question: "How often will I have contact with my nutritionist?",
    answer:
      "The frequency of contact depends on your chosen plan, but typically you'll have regular check-ins, which could be weekly or bi-weekly. You'll also have access to your nutritionist for questions between sessions.",
  },
  {
    question: "How long will it take to see results?",
    answer:
      "Results vary depending on individual factors and goals. Some people may notice changes within a few weeks, while others might take a few months. Your nutritionist will help set realistic expectations and track your progress.",
  },
  {
    question:
      "Are the meal plans and recipes provided suitable for vegetarians or vegans?",
    answer:
      "Yes, our nutrition coaches can create meal plans and provide recipes suitable for various dietary preferences, including vegetarian and vegan diets. We tailor the plan to your specific needs and restrictions.",
  },
];
