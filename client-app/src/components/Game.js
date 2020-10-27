import React from "react";
import Icon from "./Icon";
import "./table.css";

export default function Table(props) {
  const { matchHeroesList, heroFound, heroToHunt } = props;

  const arrayOfHeroes = matchHeroesList.map((hero) => {
    return (
      <Icon
        key={hero.id}
        heroInfo={hero}
        heroFound={heroFound}
        heroToHunt={heroToHunt}
      />
    );
  });

  return arrayOfHeroes;
}
