import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const getAllChatsAsync = createAsyncThunk(
  "chats/getAllchatAsync",
  async () => {
    console.log("fetching data");
    console.log(localStorage.getItem("token"));
    const data = await Axios.get("http://localhost:5000/api/chat", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);
// export const AddNewTaskAsync = createAsyncThunk(
//   "tasks/AddNewTaskAsync",
//   async (payload) => {
//     const response = await Axios.post(
//       "http://localhost:5000/api/v1/tasks",
//       payload
//     );
//     const task = response.data;
//     return task;
//   }
// );
// export const deleteTaskAsync = createAsyncThunk(
//   "tasks/deleteTaskAsync",
//   async (payload) => {
//     const id = payload.id;
//     const response = await Axios.delete(
//       `http://localhost:5000/api/v1/tasks/${id}`
//     );
//     return payload;
//   }
// );
// export const toggleIsdoneAsync = createAsyncThunk(
//   "tasks/toggleIsdoneAsync",
//   async (payload) => {
//     const id = payload.id;
//     const newPayload = {
//       content: payload.content,
//       isdone: payload.isdone,
//     };
//     const response = await Axios.patch(
//       `http://localhost:5000/api/v1/tasks/${id}`,
//       { content: payload.content, isdone: payload.isdone }
//     );
//     console.log(newPayload);
//     return payload;
//   }
// );

const ChatSlice = createSlice({
  name: "chats",
  initialState: [],
  reducers: {
  },
  extraReducers: {
    [getAllChatsAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      console.log(action.payload.data.data);
       return action.payload.data.data;
    },  
  },
});
export const { getAllChats } = ChatSlice.actions;
export default ChatSlice.reducer;
