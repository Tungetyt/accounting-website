import {
  Snackbar,
  Container,
  TextField,
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

const MessageForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isUpdatedCorrectly, setIsUpdatedCorrectly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const onChange = (e) => {
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
      { message },
      process.env.GATSBY_EMAILJS_USER_ID,
    ).then(
      (response) => {
        console.log(response.status, response.text);
        setIsUpdatedCorrectly(true);
        handleFinishedSubmit();
        setSentMessages((prevState) => [...prevState, message]);
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
          name="message"
          label="WIADOMOŚĆ EMAIL"
          multiline
          fullWidth
          value={message}
          onChange={onChange}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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
