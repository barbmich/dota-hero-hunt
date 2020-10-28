import React from "react";
import Score from "./Score";
import Table from "./Table";

export default function Game({ fullState, score, heroFound }) {
  console.log("fullstate:", fullState);
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
