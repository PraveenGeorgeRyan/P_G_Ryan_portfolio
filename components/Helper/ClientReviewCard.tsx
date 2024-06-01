import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface ClientReviewCardProps {
  image: string;
  user: string;
  role: string;
  review: string;
}

const ClientReviewCard = ({
  image,
  user,
  role,
  review,
}: ClientReviewCardProps) => {
  return (
    <div className="m-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
      <div className="rounded-xl border-2 border-gray-700 p-4">
        <Image
          src={`${image}`}
          alt={user}
          width={70}
          height={70}
          className="mx-auto mt-8 rounded-full"
        />

        <div>
          <SparklesIcon className="fixed size-24 text-white opacity-15" />
        </div>
        <p className="mt-12 text-[15px] text-white opacity-65">{review}</p>
        <div className="mt-[0.4rem] flex items-center justify-center space-x-1">
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
        </div>
        <div>
          <SparklesIcon className="fixed right-0 size-24 text-white opacity-15" />
        </div>
        <h1 className="mt-8 text-center text-[20px] font-medium text-white">
          {user}
        </h1>
        <p className="mb-12 text-center text-[18px] text-yellow-400">{role}</p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
