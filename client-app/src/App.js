import React, { useEffect, useState } from "react";
import {
  TableAndTarget,
  randomizeHeroesTable,
  randomValue,
} from "./helpers/randomizeHeroTable";
import { heroes } from "./database";
import Game from "./components/Game";
import Score from "./components/Score";

import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";

function App() {
  const [score, setScore] = useState(0);
  const [fullState, setFullState] = useState({ heroList: [], heroToHunt: {} });
  const [heroList, setHeroList] = useState([]);
  const [heroToHunt, setHeroToHunt] = useState(null);

  useEffect(() => {
    const table = randomizeHeroesTable(heroes);
    setHeroList(table);
    setHeroToHunt(table[randomValue()]);
  }, [score]);

  function heroFound(hero) {
    if (hero.id === heroToHunt.id) {
      setScore(score + 1);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3em",
      }}
    >
      <h1>THE DOTA2 HERO HUNT</h1>
      <section style={{ width: "512px" }}>
        <h3 style={{ textAlign: "center" }}>
          FIND THE FOLLOWING HERO: {heroToHunt && heroToHunt.localized_name}
        </h3>
        <Score score={score} />
        <Game
          matchHeroesList={heroList}
          heroToHunt={heroToHunt}
          heroFound={heroFound}
          className={"table"}
        />
      </section>
    </div>
  );
}

export default App;
