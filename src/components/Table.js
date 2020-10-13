import React from "react";
import Icon from "./Icon";
import "./table.css";

export default function Table(props) {
  const { matchHeroesList, heroFound } = props;

  const arrayOfHeroes = matchHeroesList.map((hero, i) => {
    return <Icon key={i} heroInfo={hero} heroFound={heroFound} />;
  });

  return arrayOfHeroes;
}
