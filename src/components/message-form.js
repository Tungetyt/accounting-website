import {
  Snackbar,

  TextField,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import PublishIcon from '@material-ui/icons/Publish';
import { Alert } from '@material-ui/lab';
import React, { useContext, useReducer, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';

const MessageForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isUpdatedCorrectly, setIsUpdatedCorrectly] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    console.log('message', message);
  };
  console.log('message', message);
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit} style={{ width: '100%' }}>

        <TextField
          name="message"
          label="WIADOMOŚĆ EMAIL"
          multiline
          fullWidth
            // rows={6}
          value={message}
          onChange={onChange}
          variant="outlined"
          size="large"
          autoComplete="new-password"
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'off');
          }}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          size="small"
          endIcon={<SendIcon />}
          disabled={!message}
        >
          WYŚLIJ
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
