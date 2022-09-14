import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload) => {
    console.log(payload);
    const response = await Axios.post(
      "http://localhost:5000/api/auth/login",
      payload
    );
    localStorage.setItem("token", response.data.token);
    const user = response.data;
    console.log(user);
    return user;
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

const AuthSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getCurrentState: (state) => {
      console.log(state);
      return state;
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      //state.push(action.payload);
      console.log(action.payload);
      return action.payload.data;
    },
     [getAllChatsAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      console.log(action.payload.data.data);
       return action.payload.data.data;
    },  
  },
});
export const selectAuth = (state) => state.auth;
export const { getCurrentState } = AuthSlice.actions;
export default AuthSlice.reducer;
