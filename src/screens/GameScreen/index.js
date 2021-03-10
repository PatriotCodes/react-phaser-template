import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import { Box } from '@material-ui/core';
import baseConfig from '../../game/constants/gameConfig';

const GameScreen = () => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const game = new Phaser.Game(baseConfig);
    setGame(game);

    window.addEventListener('resize', () => {
      game.scale.resize(window.innerWidth, window.innerHeight);
    });
    return () => {
      game.destroy();
    };
  }, []);

  return <Box id="phaser" width="100vw" height="100vh" />;
};

export default GameScreen;
