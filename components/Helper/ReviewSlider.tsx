import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="true"
    >
      <ClientReviewCard
        image="/images/user1.jpg"
        user="Hange Zoe"
        review="I was highly impressed with the clear communication and timely delivery. The website design exceeded my expectations and helped me"
      />
      <ClientReviewCard
        image="/images/user2.jpg"
        user="Ria Jones"
        review="The development process was smooth and efficient. The developer was always available to answer my questions and make adjustments."
      />
      <ClientReviewCard
        image="/images/user3.jpg"
        user="David"
        review="The developer's expertise in building user-friendly e-commerce platforms was evident throughout the project. I highly recommend him."
      />
      <ClientReviewCard
        image="/images/user4.jpg"
        user="lorren"
        review="The web app development process was collaborative and enjoyable. The developer created a user-friendly and engaging app"
      />
    </Carousel>
  );
};

export default ReviewSlider;
