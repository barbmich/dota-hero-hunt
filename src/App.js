import React, { useState } from "react";
import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";
import Table from "./components/Table";
import { heroes } from "./database";
import { randomizeHeroesTable } from "./helpers/randomizeHeroTable";
import { randomizeHeroHunt } from "./helpers/randomizeHeroHunt";

function App() {
  const matchHeroesList = randomizeHeroesTable(heroes);
  const heroToHunt = matchHeroesList[randomizeHeroHunt(0, 95)].localized_name;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>THE DOTA2 HERO HUNT</h1>
      <h3>Find the hidden hero!</h3>
      <section style={{ width: "43%" }}>
        <h3 style={{ textAlign: "center" }}>
          FIND THE FOLLOWING HERO: {heroToHunt}
        </h3>
        <Table matchHeroesList={matchHeroesList} />
      </section>
    </div>
  );
}

export default App;
