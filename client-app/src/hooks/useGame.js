import { useState, useRef, useEffect } from "react";
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:6500";
const NEW_USER_EVENT = "newUserEvent";

const useGame = () => {
  const [users, setUsers] = useState([]);
  const socketRef = useRef();

  console.log("useeffect");
  console.log(users);

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(NEW_USER_EVENT, (data) => {
      const incomingData = {
        ...data,
        ownedByCurrentUser: data.senderId === socketRef.current.id,
      };
      setUsers((users) => [...users, incomingData]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendUsers = (nameBody) => {
    socketRef.current.emit(NEW_USER_EVENT, {
      body: nameBody,
      senderId: socketRef.current.id,
    });
  };

  return { users, sendUsers };
};

export default useGame;
