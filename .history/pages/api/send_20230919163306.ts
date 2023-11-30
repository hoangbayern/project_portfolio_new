import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name, email, message } = req.body

  const messageData = await resend.emails.send({
    from: 'Contact Form <contact@mg.ethanmick.com>',
    to: 'hoangdm2002@gmail.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
  })

  try {
    res.status(200).json(messageData);
  } catch (err: any) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}