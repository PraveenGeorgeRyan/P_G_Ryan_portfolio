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
        user="sajal Talukder"
        role="web Developer"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
      <ClientReviewCard
        image="/images/user2.jpg"
        user="Hange Zoe"
        role="Full Stack Developer"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
      <ClientReviewCard
        image="/images/user3.jpg"
        user="Anas Talukder"
        role="Mern Developer"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
      <ClientReviewCard
        image="/images/user4.jpg"
        user="Mikasa Ackerman"
        role="React Developer"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
    </Carousel>
  );
};

export default ReviewSlider;
