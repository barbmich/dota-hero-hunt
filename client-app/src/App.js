import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game";
import Table from "./components/Table";
import Score from "./components/Score";
import axios from "axios";

import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";
import Homepage from "./components/Homepage";

function App() {
  const [score, setScore] = useState(0);
  const [fullState, setFullState] = useState({ heroList: [], heroToHunt: {} });
  const [loading, setLoading] = useState(true);
  console.log("rerender");
  useEffect(() => {
    axios.get("http://localhost:6500/game").then((res) => {
      setFullState({
        ...fullState,
        heroList: res.data.heroList,
        heroToHunt: res.data.heroToHunt,
      });
      setLoading(false);
    });
  }, [score]);

  function heroFound(hero) {
    if (hero.id === fullState.heroToHunt.id) {
      setScore(score + 1);
    }
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Router>
      <Route
        path="/game"
        render={(props) => (
          <Game
            {...props}
            fullState={fullState}
            score={score}
            heroFound={heroFound}
          />
        )}
      />
      <Route exact path="/" component={Homepage} />
    </Router>
  );
}

export default App;
