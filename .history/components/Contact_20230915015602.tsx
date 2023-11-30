import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-container py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <form action="" className="flex flex-col gap-3 mt-6">
        <input type="email" placeholder="Your email" className="bg-inherit h-14 border
          border-textGreen rounded-lg px-4" />
        <textarea name="" id="" className="h-52 rounded-lg bg-inherit p-4 border
         border-textGreen" placeholder="Your message"></textarea>
        <button type="submit" className="bg-black py-3 px-3 rounded-full">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
