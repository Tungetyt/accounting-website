import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  btn: {
    fontWeight: 'bold',
  },
});
const LangBtnContent = ({ content }) => {
  const { btn } = useStyles();

  return (
    <div>
      <Typography noWrap className={btn} color="primary">{content}</Typography>
    </div>
  );
};

export default LangBtnContent;
