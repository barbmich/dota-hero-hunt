const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: true,
  origin: "http://localhost:3000",
});
const cors = require("cors");
const { Socket } = require("socket.io");
const { heroes } = require("./db/database.js");
const { Game } = require("./helpers/game.js");
const port = 6500;

app.use(cors());

const NEW_USER_EVENT = "newUserEvent";
const NEW_GAME_INSTANCE = "newGameInstance";
const USER_LIST = "userList";
const RESET_USER_LIST = "resetUserList";
const HERO_FOUND = "heroFound";

let users = [];
const roomId = 1;
let gameInstance = {};

io.on("connection", (socket) => {
  console.log(`client ${socket.id} connected`);
  socket.join(roomId);

  io.to(socket.id).emit(USER_LIST, users);

  socket.on(NEW_USER_EVENT, (data) => {
    const newUser = { ...data, score: 0 };
    users.push(newUser);
    io.emit(NEW_USER_EVENT, newUser);
  });

  socket.on(NEW_GAME_INSTANCE, () => {
    const game = new Game();
    const table = game.randomizeHeroesTable();
    gameInstance = {
      heroList: table,
      heroToHunt: table[game.randomValue()],
    };
    console.log(gameInstance.heroToHunt);
    io.emit(NEW_GAME_INSTANCE, gameInstance);
  });

  socket.on(HERO_FOUND, (data) => {
    console.log("hero found data:", data);
    if (data.body.id === gameInstance.heroToHunt.id) {
      const winner = users.find((user) => user.senderId === data.senderId);
      users.forEach((user) => {
        if (user.senderId === winner.senderId) {
          user.score += 1;
        }
      });
      console.log(users);
      io.emit(HERO_FOUND, winner);
    }
  });

  socket.on(RESET_USER_LIST, () => {
    users = [];
    io.emit(RESET_USER_LIST);
  });

  socket.on("disconnect", () => {
    console.log(`client ${socket.id} disconnected`);
    socket.leave(roomId);
  });
});

// app.get("/game", (req, res) => {
//   const game = new Game();
//   const table = game.randomizeHeroesTable();
//   res.send({ heroList: table, heroToHunt: table[game.randomValue()] });
// });

server.listen(port, () => console.log("server is up on port", port));
