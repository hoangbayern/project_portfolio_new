"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


type sendType = {
    email: string,
    message: string,
}

export const sendEmail = async (formData: sendType)=> {
    console.log(formData);
    
    resend.emails.send({
        from: 'you@example.com',
        to: 'h01699149692@gmail.com',
        subject: 'hello world',
        text: "Hello youdasassd!",
    });
}