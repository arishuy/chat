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
      state.push(action.payload.data);
      console.log(action.payload);
    },
  },
});
export const selectAuth = (state) => state.auth;
export const { getCurrentState } = AuthSlice.actions;
export default AuthSlice.reducer;
