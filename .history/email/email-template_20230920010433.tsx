import React from 'react'
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

  type EmailTemplateProps = {
    userName: string;
    messageForm: string;
    email: string;
  }

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({userName, messageForm, email}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black w-full">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text className='text-sm'>
                From: <span className='font-bold text-lg'>{userName}</span>
              </Text>
              <Text>{messageForm}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
