import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import customTheme from './theme';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'mobx-react';
import gameStore from './store/game.store';
import GameScreen from './screens/GameScreen';

const App = () => {
  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline>
        <Provider {...{ gameStore }}>
          <GameScreen />
        </Provider>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
