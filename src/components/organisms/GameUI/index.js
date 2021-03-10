import React from 'react';
import { Box } from '@material-ui/core';
import BottomRightGameUI from '../../molecules/BottomRightGameUI';

const GameUI = () => {
  return (
    <Box position="absolute" height="100vh" width="100vw" top={0} left={0}>
      <BottomRightGameUI />
    </Box>
  );
};

export default GameUI;
