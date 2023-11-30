import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    
    sendEmail(formData);
  };

  return (
    <section
      id="contact"
      className="max-w-container mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <form
        onSubmit={{handleFormSubmit}}
        className="flex flex-col gap-3 mt-6"
      >
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-inherit h-14 border
          border-textGreen rounded-lg px-4 sm:w-[38-rem] outline-none"
        />
        <textarea
          name="message"
          id=""
          value={formData.message}
          onChange={handleInputChange}
          className="h-52 rounded-lg bg-inherit p-4 border
         border-textGreen sm:w-[38rem] outline-none"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-700 py-3 px-3 rounded-full h-[3rem] w-[8rem]
         text-white hover:bg-black hover:shadow-lg transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
