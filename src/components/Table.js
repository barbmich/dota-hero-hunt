import React from "react";
import Icon from "./Icon";

export default function Table(props) {
  const { matchHeroesList } = props;

  const arrayOfHeroes = matchHeroesList.map((hero, i) => {
    return <Icon key={i} heroInfo={hero} />;
  });

  return arrayOfHeroes;
}
