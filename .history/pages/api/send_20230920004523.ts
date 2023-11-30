import { EmailTemplate } from '@/email/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler (req: NextApiRequest, res: NextApiResponse)  {
  const { name, email, message } = req.body
  console.log(req.body);
  
  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['hoangdm2002@gmail.com'],
      subject: 'New Contact Form!',
      reply_to: email,
      react: EmailTemplate({userName: name, messageForm: message}),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
