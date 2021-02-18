import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './marker.css';

const Marker = (props) => {
  const { color, name, id } = props;
  const useStyles = makeStyles(() => ({
    marker: {
      backgroundColor: color, cursor: 'pointer',
    },
  }));
  const {
    marker,
  } = useStyles();

  return (
    <div>
      <div
        className={`pin bounce ${marker}`}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
