import React from "react";
import "../../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
const classNames = require("classnames");

export default function Icon(props) {
  const { heroInfo, heroFound, heroToHunt } = props;
  const heroIcon = classNames("d2mh", `hero-${heroInfo && heroInfo.id}`);

  return (
    <i
      className={heroIcon}
      style={
        // heroToHunt.id === heroInfo.id
        // ? { backgroundColor: "white" } :
        { backgroundColor: "inherit" }
      }
      onClick={() => {
        return heroFound(heroInfo);
      }}
    />
  );
}
