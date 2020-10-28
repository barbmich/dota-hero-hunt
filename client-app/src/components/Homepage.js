import React, { useState } from "react";

export default function Homepage() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(false);
  return (
    <main style={{ textAlign: "center", marginTop: "3em" }}>
      <input
        disabled={disabled}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>{" "}
      <button
        onClick={() => {
          setUsers([...users, username]);
          setDisabled(true);
        }}
      >
        add
      </button>
      <div>
        <br />
        list of players:
        <ul>
          {users.map((user) => (
            <li>{user}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
