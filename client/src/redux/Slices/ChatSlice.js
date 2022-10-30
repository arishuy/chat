import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const getAllChatsAsync = createAsyncThunk(
  "chats/getAllchatAsync",
  async () => {
    console.log("fetching data");
    const data = await Axios.get("http://localhost:5000/api/chat", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
  );
  export const getChatID = createAsyncThunk(
    "chats/getChatID",
    async (userID1, userID2) => {
        const data = await Axios.get(`http://localhost:5000/api/chat`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return data;
      } 
  );
  const ChatSlice = createSlice({
    name: "chats",
  initialState: [],
  reducers: {
  },
  extraReducers: {
    [getAllChatsAsync.fulfilled]: (state, action) => {
       return action.payload.data.data;
    },  
  },
});
export const { getAllChats } = ChatSlice.actions;
export default ChatSlice.reducer;
