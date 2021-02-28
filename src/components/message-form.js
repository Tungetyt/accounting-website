import {
  Divider, Snackbar,
  TextField, Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Alert } from '@material-ui/lab';
import * as emailjs from 'emailjs-com';
import React, { useState, useContext } from 'react';
import blue from '@material-ui/core/colors/blue';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SubjectIcon from '@material-ui/icons/Subject';
import {
  DEFAULT_PADDING, getItemByKey, DEFAULT_THEME, THEME_DICT, SECONDARY_COLOR,
} from '../helpers';
import { ColorContext } from '../context/contexts';

const SENT_MESSAGES_DATA = 'sentMessagesData';
const useStyles = makeStyles(() => ({
  // Doesn't work for some reason...
  // textField:{
  //   marginBottom: '0.6rem'
  // },
  defaultPadding: {
    marginBottom: DEFAULT_PADDING,
  },
  fontWeight: {
    fontWeight: 'bold',
  },
  whiteSpace: {
    whiteSpace: 'pre-line',
  },
}));

const MessageForm = () => {
  const {
    defaultPadding, fontWeight, whiteSpace,
  } = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isUpdatedCorrectly, setIsUpdatedCorrectly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [sentMessagesData, setSentMessagesData] = useState(
    JSON.parse(getItemByKey(SENT_MESSAGES_DATA) || '[]')
      .map((sm) => ({ ...sm, date: new Date(sm.date) })),
  );
  const [isDark] = useContext(ColorContext);

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

  const validateEmail = (e) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e?.target?.value || '')) {
      setIsEmailValid(true);
      return (true);
    }
    setIsEmailValid(false);
    return (false);
  };

  const validate = () => {
    if (email && isEmailValid && message) {
      return (true);
    }
    return (false);
  };

  const getPlaceholderColor = () => {
    const { light, dark } = SECONDARY_COLOR;
    if (isDark === undefined) {
      return DEFAULT_THEME === THEME_DICT.dark ? dark : light;
    }
    return isDark ? dark : light;
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>

        <TextField
          name="email"
          label="TWÓJ KONTAKTOWY ADRES EMAIL"
          fullWidth
          value={email}
          onChange={onEmailChange}
          variant="standard"
          size="large"
          autoComplete="email"
          className="email"
          style={{ marginBottom: '0.6rem' }}
          onBlur={validateEmail}
          error={!isEmailValid}
          helperText={isEmailValid ? '' : 'zły email'}
          InputLabelProps={{
            style: {
              color: getPlaceholderColor(),
            },
          }}
          InputProps={{
            endAdornment: <AlternateEmailIcon />,
          }}
        />

        <TextField
          key="TWOJA WIADOMOŚĆ"
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
          InputLabelProps={{
            style: {
              color: getPlaceholderColor(),
            },
          }}
          InputProps={{
            endAdornment: <SubjectIcon />,
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
          disabled={!validate() || isSubmitting}
        >
          WYŚLIJ DO NAS WIADOMOŚĆ
        </Button>
      </form>

      {sentMessagesData?.length > 0 && <div className={defaultPadding} />}
      {sentMessagesData.sort((sm1, sm2) => sm2.date - sm1.date).map((sm) => (
        <>
          <Divider />
          <br />
          <Typography paragraph className={fontWeight}>{sm.date.toLocaleString('pl-PL', { timeZone: 'UTC' })}</Typography>
          <Typography paragraph className={whiteSpace}>{sm.message}</Typography>
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
