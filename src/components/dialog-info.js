import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import React from 'react';

const Transition = React.forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

export default function DialogInfo({ title, data = [], isJustified = true }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button style={{ backgroundColor: '#212121', color: '#FFFFFF' }} onClick={handleClickOpen('paper')}>{title}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        TransitionComponent={Transition}
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {data.map((text) => <Typography paragraph align={isJustified ? 'justify' : 'left'}>{text}</Typography>)}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}
