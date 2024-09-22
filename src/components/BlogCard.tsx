import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";

type Props = {
  data: {
    cover: string;
    title: string;
    category: string;
    subtitle: string;
    createdAt: string;
    readTime: string;
    author: {
      avatar: string;
      name: string;
    };
  };
};

const BlogCard = ({ data }: Props) => {
  return (
    <div className="bg-lime-50 border border-s-lime-200 p-8 rounded-xl">
      <div className="relative rounded-xl w-full h-52 overflow-hidden mb-5">
        <Image
          src={data.cover}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-sm">{data.category}</span>
          <h3 className="text-xl font-bold">{data.title}</h3>
        </div>
        <p className="text-sm text-neutral-600">{data.subtitle}</p>

        <div className="flex flex-col gap-5 bg-white border border-s-lime-200 p-4 rounded-xl">
          <div className="flex gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-xl relative">
              <Image
                src={data.author.avatar}
                alt={data.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{data.author.name}</p>
              <p className="text-sm text-neutral-500">
                {data.createdAt} - {data.readTime} read
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="icon">
              <HeartIcon className="w-6 text-neutral-500" />
            </Button>
            <Button variant="outline" size="icon">
              <BookmarkIcon className="w-6 text-neutral-500 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
