/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  rating: string;
  senderEmail: string;
  feedback: string;
};

export default function ContactFormEmailNew({
  rating,
  senderEmail,
  feedback,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from effling feedback service</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the feedback form
              </Heading>
              <Text className="text-xl">{feedback}</Text>
              <Hr />
              <Text className="text-lg">The user's rating is: {rating}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
