import React from "react";
import "./App.css";
import "../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
import "./components/Icon";
import Table from "./components/Table";
import { heroes } from "./database";
import { randomizeHeroesTable } from "./helpers/randomizeHeroTable";

function App() {
  const matchHeroesList = randomizeHeroesTable(heroes);

  return <Table matchHeroesList={matchHeroesList} />;
}

export default App;
