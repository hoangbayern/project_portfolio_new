import type { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: any) {
  try {
    const body = await req.json();
    const { email, message } = body;
    const data = await resend.emails.send({
      from: 'HuyHoang Developer <onboarding@resend.dev>',
      to: ['hoangdm2002@gmail.com'],
      subject: 'Message from contact form',
      text: message,
      reply_to: email,
    });

    req.status(200).json(data);
  } catch (error) {
    console.log(error);
    req.status(500).json({ error: 'An error occurred while sending the email.' });
  }
};
