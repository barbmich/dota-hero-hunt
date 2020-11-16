import React from "react";

export default function Score(props) {
  const { users } = props;

  const usersScore = users.map((user, i) => (
    <span key={i} style={{ margin: "1em" }}>
      {user.name}: {user.score}
    </span>
  ));

  return (
    <section style={{ textAlign: "center" }}>
      <h3> Current score:</h3>
      {usersScore}
    </section>
  );
}
