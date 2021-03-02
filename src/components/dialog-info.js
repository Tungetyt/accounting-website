/* eslint-disable react/no-array-index-key */
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APP_THEME } from '../helpers';

const Transition = React.forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

export default function DialogInfo({
  children, title, data = [], isJustified = true,
}) {
  const useStyles = makeStyles((theme) => ({
    buttonText: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    // button: {
    //   [theme.breakpoints.down('xs')]: {
    //     '& .MuiButton-startIcon': {
    //       margin: 0,
    //     },
    //   },
    // },
  }));

  const {
    buttonText, button,
  } = useStyles();
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
      <Button aria-label={title} id={title} name={title} className={button} onClick={handleClickOpen('paper')} startIcon={children} fullWidth><span className={buttonText}>{title}</span></Button>
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
            {data.map((text, i) => <Typography key={i} paragraph align={isJustified ? 'justify' : 'left'}>{text}</Typography>)}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
