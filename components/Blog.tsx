import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="bg-black pt-5">
      <div className="bg-black pb-12 pt-20">
        <div className="text-center">
          <p className="heading__mini">My Blog</p>
          <h1 className="heading__primary">
            My latest <span className="text-yellow-300">Blog Posts</span> and
            News
          </h1>
        </div>
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-8 pt-12 md:grid-cols-2 md:pt-20 lg:grid-cols-3">
          <div
          // data-aos="zoom-in" data-aos-anchor-placement="top-bottom"
          >
            <BlogCard
              title="FullStack Developer Roadmap"
              comments="4"
              date="24 January 2024"
              image="/images/b1.jpg"
            />
          </div>
          <div
          // data-aos="zoom-in"
          // data-aos-anchor-placement="top-bottom"
          // data-aos-delay="100"
          >
            <BlogCard
              title="Starting with React JS"
              comments="8"
              date="26 January 2024"
              image="/images/b2.jpg"
            />
          </div>
          <div
          // data-aos="zoom-in"
          // data-aos-anchor-placement="top-bottom"
          // data-aos-delay="200"
          >
            <BlogCard
              title="Time Management in Tech Job"
              comments="4"
              date="24 January 2024"
              image="/images/b1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
