"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData)=> {
    console.log(formData.get("email"));
    console.log(formData.get("message"));
}