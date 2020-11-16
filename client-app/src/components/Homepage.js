import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useGame from "../hooks/useGame";

export default function Homepage({
  users,
  sendUsers,
  startGame,
  resetUserList,
}) {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSetUsername = () => {
    sendUsers(username);
    setDisabled(true);
  };
  return (
    <main style={{ textAlign: "center", marginTop: "3em" }}>
      <input
        disabled={disabled}
        placeholder="username"
        onChange={handleUsernameChange}
      ></input>{" "}
      <button disabled={disabled} onClick={handleSetUsername}>
        add
      </button>
      <div>
        <br />
        list of players:
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
        <button onClick={startGame}>start game</button>
        <br />
        <button onClick={resetUserList}>reset players</button>
      </div>
    </main>
  );
}
