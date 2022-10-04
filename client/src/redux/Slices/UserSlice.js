import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const addNewFriendAsync = createAsyncThunk(
  "user/addNewFriendAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `http://localhost:5000/api/user/addFriend`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
      console.log(error);
    }
  }
);

export const acceptFriendAsync = createAsyncThunk(
  "user/acceptFriendAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `http://localhost:5000/api/user/acceptFriend`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "user/getUserByIdAsync",
  async (userId) => {
    console.log("fetching data");
    const data = await Axios.get(`http://localhost:5000/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);

export const FindUserByNameAsync = createAsyncThunk(
  "user/FindUserByNameAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `http://localhost:5000/api/user/findUser`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
      console.log(error);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState:{},
  reducers: {},
  extraReducers: {
    [addNewFriendAsync.fulfilled]: (state, action) => {
      console.log("adding friend successfully");
    },
    [acceptFriendAsync.fulfilled]: (state, action) => {
      console.log("accepting friend successfully");
    },
    [getUserByIdAsync.fulfilled]: (state, action) => {
      console.log(action.payload.data.data.user);
      state = { ...action.payload.data.data.user };
      console.log("getting user successfully");
      return action.payload.data.data.user;
    },
    [FindUserByNameAsync.fulfilled]: (state, action) => {
      console.log("finding user successfully");
    }
  },
});

export default UserSlice.reducer;
