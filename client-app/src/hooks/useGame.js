import { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";

const SOCKET_SERVER_URL = "http://localhost:6500";
const NEW_USER_EVENT = "newUserEvent";
const USER_LIST = "userList";
const NEW_GAME_INSTANCE = "newGameInstance";
const RESET_USER_LIST = "resetUserList";
const HERO_FOUND = "heroFound";

const useGame = () => {
  const [users, setUsers] = useState([]);
  const [fullState, setFullState] = useState({ heroList: [], heroToHunt: {} });
  const socketRef = useRef();
  const history = useHistory();

  console.log("users: ", users);

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(USER_LIST, (data) => {
      console.log(USER_LIST, data);
      setUsers(data);
    });

    socketRef.current.on(NEW_USER_EVENT, (data) => {
      const incomingData = {
        ...data,
        currentUser: data.senderId === socketRef.current.id,
      };
      setUsers((users) => [...users, incomingData]);
    });

    socketRef.current.on(NEW_GAME_INSTANCE, (data) => {
      console.log("hook:", data);
      setFullState(data);
      history.push("/game");
    });

    socketRef.current.on(RESET_USER_LIST, () => {
      setUsers([]);
    });

    socketRef.current.on(HERO_FOUND, (data) => {
      console.log(data);
      alert(`The winner is ${data.name}`);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  function sendUsers(username) {
    socketRef.current.emit(NEW_USER_EVENT, {
      name: username,
      senderId: socketRef.current.id,
    });
  }

  function startGame() {
    console.log("start game");
    socketRef.current.emit(NEW_GAME_INSTANCE);
  }

  function resetUserList() {
    socketRef.current.emit(RESET_USER_LIST);
  }

  function heroFound(hero) {
    if (hero.id === fullState.heroToHunt.id) {
      console.log("hero found");
      socketRef.current.emit(HERO_FOUND, {
        body: hero,
        senderId: socketRef.current.id,
      });
    }
  }

  return { users, sendUsers, startGame, fullState, resetUserList, heroFound };
};

export default useGame;
