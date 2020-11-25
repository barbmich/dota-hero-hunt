import { useState, useRef, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";

const SOCKET_SERVER_URL = "http://localhost:5500"; //"https://barbmich-dota-hero-hunt.herokuapp.com/";
const NEW_USER_EVENT = "newUserEvent";
const USER_LIST = "userList";
const NEW_GAME_INSTANCE = "newGameInstance";
const RESET_USER_LIST = "resetUserList";
const HERO_FOUND = "heroFound";
const NEW_ROUND = "newRound";

const useGame = () => {
  const [users, setUsers] = useState([]);
  const [fullState, setFullState] = useState({ heroList: [], heroToHunt: {} });
  const [start, setStart] = useState(false);
  const socketRef = useRef();
  const history = useHistory();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(USER_LIST, (data) => {
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
      setFullState(data);
      setStart(true);
      history.push("/game");
    });

    socketRef.current.on(RESET_USER_LIST, () => {
      setUsers([]);
    });

    socketRef.current.on(HERO_FOUND, (data) => {
      setUsers(data.users);
    });

    socketRef.current.on(NEW_ROUND, (data) => {
      setFullState(data);
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
    socketRef.current.emit(NEW_GAME_INSTANCE);
  }

  function resetUserList() {
    socketRef.current.emit(RESET_USER_LIST);
  }

  function newRound() {
    socketRef.current.emit(NEW_ROUND);
  }

  function heroFound(hero) {
    if (hero.id === fullState.heroToHunt.id) {
      socketRef.current.emit(HERO_FOUND, {
        body: hero,
        senderId: socketRef.current.id,
      });
      newRound();
    }
  }

  return {
    users,
    sendUsers,
    startGame,
    fullState,
    resetUserList,
    heroFound,
    start,
    setStart,
  };
};

export default useGame;
