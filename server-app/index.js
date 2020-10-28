const express = require("express");
const app = express();
const WebSocket = require("ws");
const server = require("http").Server(app);
const cors = require("cors");
const { heroes } = require("./db/database.js");
const { randomizeHeroesTable, randomValue } = require("./helpers/helpers.js");

const wss = new WebSocket.Server({ server });

app.use(cors());

// wss.on("connection", function connection(ws) {
//   console.log("new client connected");
//   ws.send("you connected");
//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);
//     ws.send(`got your message, it's: ${message}`);
//   });
// });

app.get("/game", (req, res) => {
  const table = randomizeHeroesTable(heroes);
  res.send({ heroList: table, heroToHunt: table[randomValue()] });
});

server.listen(6500, () => console.log("server is up"));
