import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from "socket.io-client";
import Game from "./components/Game";
import HomePage from "./components/Homepage";
import useGame from "./hooks/useGame";

import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";

function App() {
  const { users, sendUsers } = useGame();

  return (
    <Router>
      <Switch>
        <Route path="/game" render={(props) => <Game props={props} />} />
        <Route
          path="/"
          render={() => <HomePage users={users} sendUsers={sendUsers} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
