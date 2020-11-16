import React from "react";
import Icon from "../components/Icon";
import "./table.css";

export default function Table(props) {
  const { matchHeroesList, heroFound, heroToHunt } = props;

  const arrayOfHeroes =
    matchHeroesList &&
    matchHeroesList.map((hero) => {
      return (
        <Icon
          key={hero.id}
          heroInfo={hero}
          heroFound={heroFound}
          heroToHunt={heroToHunt}
        />
      );
    });

  return (
    <div style={{ border: "2px solid gold", width: "516px" }}>
      {arrayOfHeroes}
    </div>
  );
}
