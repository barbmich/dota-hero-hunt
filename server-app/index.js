const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: true,
  origin: "http://localhost:3000",
});
const cors = require("cors");
const { heroes } = require("./db/database.js");
const { randomizeHeroesTable, randomValue } = require("./helpers/helpers.js");
const port = 6500;

app.use(cors());

const NEW_USER_EVENT = "newUserEvent";
const NEW_GAME_INSTANCE = "newGameInstance";

io.on("connection", (socket) => {
  console.log(`client ${socket.id} connected`);
  const roomId = 1;
  socket.join(roomId);

  socket.on(NEW_USER_EVENT, (data) => {
    io.emit(NEW_USER_EVENT, data);
  });

  socket.on(NEW_GAME_INSTANCE, (data) => {});

  socket.on("disconnect", () => {
    console.log(`client ${socket.id} disconnected`);
    socket.leave(roomId);
  });
});

app.get("/game", (req, res) => {
  const table = randomizeHeroesTable(heroes);
  res.send({ heroList: table, heroToHunt: table[randomValue()] });
});

server.listen(port, () => console.log("server is up on port", port));
