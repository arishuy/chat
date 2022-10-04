import io from "socket.io-client";

export const socket = io.connect({  
    cors: {
    origin: "http://localhost:5000",
    credentials: true
  },transports : ['websocket'] });