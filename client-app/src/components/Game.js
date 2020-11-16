import React, { useState, useEffect } from "react";
import Score from "./Score";
import Table from "./Table";

export default function Game(props) {
  const { fullState, heroFound, users, setFullState } = props;

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
        <Table
          matchHeroesList={fullState.heroList}
          heroToHunt={fullState.heroToHunt}
          heroFound={heroFound}
          className={"table"}
        />
        <Score users={users} />
      </section>
    </div>
  );
}
