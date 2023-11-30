import type { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { email, message } = body;
    const data = resend.emails.send({
      from: 'HuyHoang Developer <onboarding@resend.dev>',
      to: ['hoangdm2002@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    req.status(200).json(data);
  } catch (error) {
    req.status(400).json(error);
  }
};
