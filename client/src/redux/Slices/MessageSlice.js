import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const createNewMessageAsync = createAsyncThunk(
  "message/createNewMessageAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `http://localhost:5000/api/message/${payload.chat}`, payload, {
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

export const getAllMessagesAsync = createAsyncThunk(
  "message/getAllMessagesAsync",
  async (chatId) => {
    const data = await Axios.get(`http://localhost:5000/api/message/${chatId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);

const MessageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
  },
  extraReducers: {
    [createNewMessageAsync.fulfilled]: (state, action) => {
    },
    [getAllMessagesAsync.fulfilled]: (state, action) => {
      return action.payload.data.data;
    },
  },
});

export default MessageSlice.reducer;
