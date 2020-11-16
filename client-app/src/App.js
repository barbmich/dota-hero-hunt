import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import HomePage from "./components/Homepage";
import useGame from "./hooks/useGame";

import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";

function App() {
  const {
    users,
    sendUsers,
    startGame,
    fullState,
    resetUserList,
    heroFound,
  } = useGame();

  return (
    <Switch>
      <Route
        path="/game"
        render={() => <Game fullState={fullState} heroFound={heroFound} />}
      />
      <Route
        path="/"
        render={() => (
          <HomePage
            users={users}
            sendUsers={sendUsers}
            startGame={startGame}
            resetUserList={resetUserList}
          />
        )}
      />
    </Switch>
  );
}

export default App;
