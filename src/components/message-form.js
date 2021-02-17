import {
  Snackbar,
  Container,
  TextField, Divider, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import PublishIcon from '@material-ui/icons/Publish';
import { Alert } from '@material-ui/lab';
import React, { useContext, useReducer, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import * as emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { DEFAULT_PADDING, getItemByKey } from '../helpers';

const SENT_MESSAGES_DATA = 'sentMessagesData';

const MessageForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isUpdatedCorrectly, setIsUpdatedCorrectly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sentMessagesData, setSentMessagesData] = useState(
    JSON.parse(getItemByKey(SENT_MESSAGES_DATA) || '[]')
      .map((sm) => ({ ...sm, date: new Date(sm.date) })),
  );

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleFinishedSubmit = () => {
    setIsSubmitting(false);
    setSnackbarOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      { message, email },
      process.env.GATSBY_EMAILJS_USER_ID,
    ).then(
      (response) => {
        console.log(response.status, response.text);
        setIsUpdatedCorrectly(true);
        handleFinishedSubmit();
        const newMessageData = { message, date: new Date() };
        localStorage.setItem(
          SENT_MESSAGES_DATA, JSON.stringify([...sentMessagesData, newMessageData]),
        );
        setSentMessagesData((prevState) => [...prevState, newMessageData]);
        setMessage('');
      },
      (err) => {
        console.log(err);
        setIsUpdatedCorrectly(false);
        handleFinishedSubmit();
      },
    );
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          name="email"
          label="TWÓJ ADRES EMAIL"
          fullWidth
          value={email}
          onChange={onEmailChange}
          variant="standard"
          size="large"
          autoComplete="email"
          style={{ marginBottom: '0.6rem' }}
        />
        <TextField
          name="message"
          label="TWOJA WIADOMOŚĆ"
          multiline
          fullWidth
          value={message}
          onChange={onMessageChange}
          variant="outlined"
          size="large"
          autoComplete="off"
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'off');
          }}
        />

        {isSubmitting && <LinearProgress />}
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          size="small"
          endIcon={<SendIcon />}
          disabled={!message || isSubmitting}
        >
          WYŚLIJ DO NAS WIADOMOŚĆ
        </Button>
      </form>

      {sentMessagesData?.length > 0 && <div style={{ marginBottom: DEFAULT_PADDING }} />}
      {sentMessagesData.sort((sm1, sm2) => sm2.date - sm1.date).map((sm) => (
        <>
          <Divider />
          <br />
          <Typography paragraph style={{ fontWeight: 'bold' }}>{sm.date.toLocaleString('pl-PL', { timeZone: 'UTC' })}</Typography>
          <Typography paragraph style={{ whiteSpace: 'pre-line' }}>{sm.message}</Typography>
        </>
      ))}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={isUpdatedCorrectly ? 'success' : 'error'}
        >
          {isUpdatedCorrectly
            ? 'WIADOMOŚĆ WYSŁANA'
            : 'WIADOMOŚĆ NIE WYSŁANA'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MessageForm;
