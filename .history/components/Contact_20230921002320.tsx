import { FormEvent, useEffect, useState } from "react";
import { Alert, AlertColor, LoadingButton } from '@mui/lab';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<{ message: string; severity: AlertColor | undefined }>({
    message: '',
    severity: undefined,
  });

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setAlertMessage({ message: '', severity: undefined });

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setOpenAlert(true);
        setAlertMessage({
          message: 'Send Message Success!',
          severity: 'success',
        });
        resetForm();
      }
    } catch (err: any) {
      setAlertMessage({
        message: err,
        severity: 'error',
      });
    }
  }

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

      <form onSubmit={onSubmit}
        className="flex flex-col gap-3 mt-6"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-inherit h-14 border
          border-textGreen rounded-lg px-4 sm:w-[38-rem] outline-none"
        />
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-inherit h-14 border
          border-textGreen rounded-lg px-4 sm:w-[38-rem] outline-none"
        />
        <textarea
          name="message"
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
  )
};

export default Contact;
