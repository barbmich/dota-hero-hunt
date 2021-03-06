import React, { useState } from "react";

export default function Homepage({
  users,
  sendUsers,
  startGame,
  resetUserList,
}) {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  console.log(users.length);
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
            <li style={{ listStyle: "none" }} key={i}>
              {user.name}
            </li>
          ))}
        </ul>
        <button
          disabled={users.length === 0 ? true : false}
          onClick={startGame}
        >
          start game
        </button>
        <br />
        <button
          disabled={users.length !== 0 ? false : true}
          onClick={resetUserList}
        >
          reset players
        </button>
      </div>
    </main>
  );
}
