import React from 'react';
import { ButtonBase, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  children: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: '4px',
    width: '100%',
    transform: 'translate(-50%, -50%)',
  },
}));

const ImageButton = ({ imgSrc, children, ...rest }) => {
  const classes = useStyles();

  return (
    <ButtonBase {...rest}>
      <img src={imgSrc} alt="" draggable={false} />
      <Box className={classes.children}>{children}</Box>
    </ButtonBase>
  );
};

export default ImageButton;
