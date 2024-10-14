"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col gap-6 bg-emerald-900 px-4 py-7 text-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-36">
          <Image
            src="/images/logo-full.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="items-center justify-end flex gap-2">
          <span className="font-semibold">Go To Top</span>
          <Button
            onClick={scrollToTop}
            className="size-12 rounded-full bg-emerald-800"
          >
            <ArrowUp className="text-white" />
          </Button>
        </div>

        <div className="flex  gap-2 flex-wrap col-span-2">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/process">Process</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-between items-center bg-emerald-800 border border-emerald-600 p-5 rounded-lg ">
        <div className="flex gap-2 flex-col w-full">
          {actions.map((item, index) => (
            <Button
              className="w-full text-white bg-transparent border border-emerald-600"
              key={index}
              onClick={item.onClick}
            >
              {item.icon} {item.label}
            </Button>
          ))}
        </div>
        <span>© 2023 Nutritionist. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

const actions = [
  {
    icon: "",
    label: "hello@squareup.com",
    onClick: () => {},
  },
  {
    icon: "",
    label: "+91 91813 23 2309",
    onClick: () => {},
  },
  {
    icon: "",
    label: "Somewhere in the World",
    onClick: () => {},
  },
];
