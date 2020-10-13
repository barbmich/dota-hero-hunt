import React, { useState } from "react";
import "../../node_modules/dota2-minimap-hero-sprites/assets/stylesheets/dota2minimapheroes.css";
const classNames = require("classnames");

export default function Icon(props) {
  const { heroInfo, heroFound } = props;
  const [hero, setHero] = useState(heroInfo);
  const heroIcon = classNames("d2mh", `hero-${heroInfo && heroInfo.id}`);

  return (
    <i
      className={heroIcon}
      onClick={() => {
        console.log(`You clicked on ${hero.localized_name}`);
        return heroFound(hero);
      }}
    />
  );
}
