"use server";

import { Resend } from "resend";

const resend = new Resend("re_33BqTqmA_Dqo5pKAViQ93tuL2ts443NyM");

console.log(process.env.RESEND_API_KEY);


type sendType = {
    email: string,
    message: string,
}

export const sendEmail = async (formData: sendType)=> {

    resend.emails.send({
        from: 'you@example.com',
        to: 'h01699149692@gmail.com',
        subject: 'hello world',
        text: "Hello youdasassd!",
    });
}