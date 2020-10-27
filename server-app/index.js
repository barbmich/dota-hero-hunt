const express = require("express");
const app = express();
const WebSocket = require("ws");
const server = require("http").Server(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("new client connected");
  ws.send("you connected");
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    ws.send(`got your message, it's: ${message}`);
  });
});

server.listen(6500, () => console.log("server is up"));
