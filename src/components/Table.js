import React from "react";
import Icon from "./Icon";

export default function Table(props) {
  const { matchHeroesList } = props;
  return <Icon heroInfo={matchHeroesList[3]} />;
}
