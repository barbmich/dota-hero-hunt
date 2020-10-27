import React from "react";

export default function Score(props) {
  const { score } = props;
  return (
    <section style={{ textAlign: "center" }}>
      <h3> Current score: {score}</h3>
    </section>
  );
}
