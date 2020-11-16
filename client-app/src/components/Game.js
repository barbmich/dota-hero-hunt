import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "./Score";
import Table from "./Table";

export default function Game() {
  const [score, setScore] = useState(0);
  const [fullState, setFullState] = useState({ heroList: [], heroToHunt: {} });
  const [loading, setLoading] = useState(true);
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

  console.log("fullstate:", fullState);

  function heroFound(hero) {
    if (hero.id === fullState.heroToHunt.id) {
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
      <section>
        <h3 style={{ textAlign: "center" }}>
          FIND THE FOLLOWING HERO:{" "}
          {fullState.heroToHunt && fullState.heroToHunt.localized_name}
        </h3>
        <Score score={score} />
        <Table
          matchHeroesList={fullState.heroList}
          heroToHunt={fullState.heroToHunt}
          heroFound={heroFound}
          className={"table"}
        />
      </section>
    </div>
  );
}
