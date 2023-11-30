import { useEffect, useState } from "react";
import { Alert, AlertColor, LoadingButton } from '@mui/lab';
import { Snackbar, FormGroup } from '@mui/material';
import AdminInput from '@/components/Input/Input';
import { validEmail } from '@/lib/validation';
import AdminTextArea from '@/components/Input/TextArea'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<{ message: string; severity: AlertColor | undefined }>({
    message: '',
    severity: undefined,
  });
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<{ status: boolean; message: string }>({
    status: false,
    message: '',
  });
  const [errorName, setErrorName] = useState<string | null>(null);

  useEffect(() => {
    if (!validEmail(email) && email !== '') {
      setErrorEmail({ status: true, message: 'There is an error in the format of the email address' });
      return;
    }
    if (email.length > 255) {
      setErrorEmail({ status: true, message: 'Please enter your email address within 255 characters' });
      return;
    }
    setErrorEmail({ status: false, message: '' });
  }, [email]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async () => {
    setLoadingSubmit(true);
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
        setLoadingSubmit(false);
      }
    } catch (err: any) {
      setAlertMessage({
        message: err,
        severity: 'error',
      });
      setLoadingSubmit(false);
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

        <FormGroup className=" text-white">
        <AdminInput className="!text-white"
          label=""
          id="name"
          error={!!errorName}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrorName(e.target.value.length > 20 ? 'Please enter your name within 20 characters' : null);
          }}
          type="text"
          placeholder="Your name"
          helperText={errorName || ''}
          sx={{ marginTop: '10px' , borderRadius: '10px', width: '38rem' , outline: 'none', color: 'white !important', fontWeight: '700' }}
        />
      </FormGroup>
      <FormGroup>
        <AdminInput
          label=""
          error={errorEmail?.status}
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          variant="outlined"
          fullWidth
          placeholder="Your email"
          helperText={errorEmail.message || ''}
          sx={{ borderRadius: '10px', width: '38rem' , outline: 'none', color: 'white !important', fontWeight: '700' }}
        />
      </FormGroup>
      <FormGroup>
      <AdminTextArea
        label=""
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          resize: 'none',
          '&::placeholder': {
            color: 'gray',
          },
        }}
      />
      </FormGroup>
        <LoadingButton
          type="submit"
          variant="outlined"
          loading={loadingSubmit}
          className="bg-gray-700 py-3 px-3 rounded-full h-[3rem] w-[8rem]
         text-white hover:bg-black hover:shadow-lg transition"
         onClick={handleSubmit}
         disabled={name === '' || message === '' || email.length > 255 || name.length > 20 || !validEmail(email) || errorEmail?.status}
        >
          Send
        </LoadingButton>
      {openAlert && (
        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          onClose={() => {
            setAlertMessage({
              message: '',
              severity: undefined,
            });
            setOpenAlert(false);
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            variant="filled"
            elevation={6}
            onClose={() => {
              setAlertMessage({
                message: '',
                severity: undefined,
              });
              setOpenAlert(false);
            }}
            severity={alertMessage.severity}
            sx={{ width: '100%' }}
          >
            {alertMessage.message}
          </Alert>
        </Snackbar>
      )}
    </section>
  )
};

export default Contact;
