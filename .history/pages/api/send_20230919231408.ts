import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler (req: NextApiRequest, res: NextApiResponse)  {
  const { name, email, message } = req.body
  console.log(req.body);
  
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['hoangdm2002@gmail.com'],
      subject: 'Hello world lan thu 5 nha!',
      text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
