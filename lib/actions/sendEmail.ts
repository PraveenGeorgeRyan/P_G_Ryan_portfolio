"use server";

import React from "react";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: any) => {
  const senderEmail = formData.email;
  const message = formData.message;

  console.log(senderEmail);
  console.log(message);

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "praveengeorgeryan.info@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
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
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  const { data, error } = await sendEmail({ email, message });

  return {
    data,
    error,
  };
};
