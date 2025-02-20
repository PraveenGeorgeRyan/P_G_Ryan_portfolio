/* eslint-disable react/no-unescaped-entities */
"use client";

import toast from "react-hot-toast";
import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false); // Use state for loading
  const formRef = useRef(null); // Create a form ref

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    setIsLoading(true); // Set loading state before submission
    // @ts-ignore
    const senderEmail = event.target.elements.senderEmail.value;
    // @ts-ignore
    const message = event.target.elements.message.value;

    // Fetch
    const res = await fetch("https://www.praveengeorgeryan.online/api/email", {
      method: "POST",
      body: JSON.stringify({
        senderEmail,
        message,
      }), // Or use FormData object directly
    });

    const { data, error } = await res.json();
    // ... handle response
    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
      // @ts-ignore
      formRef.current?.reset(); // Reset the form using ref
    }

    setIsLoading(false); // Reset loading state after submission
  };

  return (
    <div id="contact" className="bg-gray-900 pt-5">
      <div className="bg-gray-900 pb-12 pt-20">
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="heading__mini">Lets Get in Touch</p>
            <h1 className="heading__primary">
              Make Your <span className="text-yellow-400">Brand</span> Brilliant
            </h1>
            <p className="mt-4 text-[15px] text-white opacity-75">
              Ready to take your project to the next level? I'm passionate about
              helping businesses achieve their goals through creative and
              effective solutions. Let's discuss how I can turn your vision into
              reality.
            </p>
            <h1 className="mt-8 mb-4 text-[30px] font-bold text-yellow-300 ">
              +91 9704101373
            </h1>
            <h1 className="mb-8 text-[30px] font-bold text-yellow-300 ">
              +91 9705201373
            </h1>
          </div>
          <div>
            {/* <p className="heading__mini">Contact me</p> */}
            <p className="text-white">
              Feel free to reach out directly at{" "}
              <a
                className="text-yellow-400 underline"
                href="mailto:praveengeorgeryan.info@gmail.com"
              >
                praveengeorgeryan.info@gmail.com
              </a>{" "}
              or through this form
            </p>

            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="mt-10 flex flex-col gap-5 dark:text-black"
            >
              <input
                name="senderEmail"
                className="rounded-md bg-gray-800 px-4 py-[0.7rem] text-white outline-none"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className="mb-6 w-full rounded-md bg-gray-800 px-4 py-[0.7rem] text-white outline-none"
                rows={4}
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <button
                type="submit"
                className="group flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-800 text-white outline-none transition-all hover:scale-110 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <div className="size-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                  <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
