"use server";

export const sendEmail = (formData: FormData)=> {
    console.log(formData.get("email"));
    console.log(formData.get("message"));
}