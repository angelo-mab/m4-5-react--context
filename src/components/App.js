import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GameContext } from './GameContext';

import GlobalStyles from './GlobalStyles';
import Home from './Home';
import Game from './Game';

import useInterval from '../hooks/use-interval.hook'

function App(props) {
  const { numCookies, setNumCookies, cookiesPerSecond } = useContext(GameContext);

  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
          {/* we removed all the props passed onto the Game. */}
        </Route>
      </Router>
    </>
  );
}

export default App;
