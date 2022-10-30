import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload) => {
    const response = await Axios.post(
      "http://localhost:5000/api/auth/login",
      payload
    );
    localStorage.setItem("token", response.data.token);
    const user = response.data;
    return user;
  }
);
const AuthSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getCurrentState: (state) => {
      return state;},
    logoutAccount: (state) => { 
      localStorage.removeItem("token");
      return state;
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      state.push(action.payload.data);
    },
  },
});
export const selectAuth = (state) => state.auth;
export const { getCurrentState, logoutAccount } = AuthSlice.actions;
export default AuthSlice.reducer;
