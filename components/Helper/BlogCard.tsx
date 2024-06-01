import {
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  comments: string;
  date: string;
  image: string;
}

const BlogCard = ({ title, comments, date, image }: BlogCardProps) => {
  return (
    <div className="bg-gray-900">
      <div>
        <Image
          src={`${image}`}
          alt="blog"
          width={300}
          height={300}
          className="size-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="my-4 flex w-fit items-center space-x-2 rounded-lg bg-gray-800 px-3 py-1">
          <CalendarIcon className="size-4 text-yellow-400" />
          <p className="text-[14px] text-white opacity-85">{date}</p>
        </div>
        <h1 className="cursor-pointer text-[20px] font-semibold text-white underline opacity-85 transition-all duration-200 hover:text-yellow-400">
          {title}
        </h1>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChatBubbleLeftRightIcon className="size-[1.2rem] text-yellow-400" />
            <p className="text-[15px] text-white opacity-85">
              {comments} Comments
            </p>
          </div>
          <button className="text-[15px] font-semibold text-white underline transition-all duration-150 hover:text-yellow-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
