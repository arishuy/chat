import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import io from "socket.io-client";

const SocketSlice = createSlice({
  name: "socket",
  initialState: {},
  reducers: {
    getSocketStatus: (state) => {
      const socket = io("http://localhost:5000",{transports: ['websocket', 'polling', 'flashsocket']});
     state = {socket};
     console.log(state);
     return state;
    },
  },
});
export const { getSocketStatus } = SocketSlice.actions;
export default SocketSlice.reducer;
