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
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
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
    console.log('description', description);
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit} style={{ width: '100%' }}>

        <TextField
          name="description"
          label="WIADOMOŚĆ EMAIL"
          multiline
          fullWidth
          // rows={6}
          value={description}
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
        //   disable={isLoading}
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
