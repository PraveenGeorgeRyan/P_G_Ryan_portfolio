/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReviewSlider from "./Helper/ReviewSlider";

const Reviews = () => {
  return (
    <div className="bg-black pb-12 pt-20">
      <div className="text-center">
        <p className="heading__mini">Client Reviews</p>
        <h1 className="heading__primary">
          I've <span className="text-yellow-300">20+</span> Clients Feedback
        </h1>
      </div>
      <div className="mx-auto w-4/5 pt-12 md:pt-20">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
