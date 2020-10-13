import React, { useState } from "react";
import { randomizeHeroesTable } from "./helpers/randomizeHeroTable";
import { randomizeHeroHunt } from "./helpers/randomizeHeroHunt";
import { heroes } from "./database";
import Table from "./components/Table";

import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";

function App() {
  const matchHeroesList = randomizeHeroesTable(heroes);
  const [heroToHunt, setHeroToHunt] = useState(
    matchHeroesList[randomizeHeroHunt(0, 95)]
  );
  function heroFound(hero) {
    console.log("state:", heroToHunt.id);
    console.log("hero clicked", hero.id);
    if (hero.id === heroToHunt.id) {
      alert("you found it!");
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
      <h3>Find the hidden hero!</h3>
      <section style={{ width: "512px" }}>
        <h3 style={{ textAlign: "center" }}>
          FIND THE FOLLOWING HERO: {heroToHunt.localized_name}
        </h3>
        <Table
          matchHeroesList={matchHeroesList}
          heroFound={heroFound}
          className={"table"}
        />
      </section>
    </div>
  );
}

export default App;
