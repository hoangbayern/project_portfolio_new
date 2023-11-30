"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData)=> {
    console.log(formData.get("email"));
    console.log(formData.get("message"));

    resend.emails.send({
        from: 'you@example.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        text: "Hello youdasassd!",
    });
}