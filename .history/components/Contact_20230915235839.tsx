import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState<string>('');

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try{
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    if (response.status === 200) {
      setSubmissionStatus('success');
    } else {
      setSubmissionStatus('error');
    }
  } catch (error) {
    console.error(error);
    setSubmissionStatus('error');
  }
    
    // if(response.status === 200){
    //   setFormData(response);
    // }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        onSubmit={handleFormSubmit}
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
        {submissionStatus === 'success' && (
          <p className="text-green-500 mt-2">Submission successful!</p>
        )}

        {submissionStatus === 'error' && (
          <p className="text-red-500 mt-2">Submission failed. Please try again later.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
