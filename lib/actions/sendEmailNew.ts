"use server";

import React from "react";

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmailNew from "@/email/contact-form-email-new";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: any) => {
  const senderEmail = formData.email;
  const feedback = formData.feedback;
  const rating = formData.rating;

  console.log(senderEmail);
  console.log(feedback);

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(feedback, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dappuprashanth43@gmail.com",
      subject: "Message from contact form",
      // reply_to: senderEmail,
      react: React.createElement(ContactFormEmailNew, {
        rating,
        senderEmail,
        feedback,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export const mailAction = async ({
  rating,
  email,
  feedback,
}: {
  rating: string;
  feedback: string;
  email: string;
}) => {
  const { data, error } = await sendEmail({ email, rating, feedback });

  return {
    data,
    error,
  };
};
