import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
    setFullState,
    fullState,
    resetUserList,
    heroFound,
    start,
  } = useGame();

  return (
    <Switch>
      <Route
        path="/game"
        render={() =>
          start ? (
            <Game
              setFullState={setFullState}
              fullState={fullState}
              heroFound={heroFound}
              users={users}
            />
          ) : (
            <Redirect to="/" />
          )
        }
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
