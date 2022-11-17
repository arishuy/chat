import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const getAllNotificationsAsync = createAsyncThunk(
  "notifications/getAllNotificationsAsync",
  async () => {
    console.log("fetching data");
    const data = await Axios.get("http://localhost:5000/api/notification/tome", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);
export const createNewNotificationAsync = createAsyncThunk(
  "notifications/createNewNotificationAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `http://localhost:5000/api/notification`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      console.log(message);
      return message;
    } catch (error) {
      console.log(error);
    }
  }
);
const NotificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllNotificationsAsync.fulfilled]: (state, action) => {
        console.log("fetching data successfully");
        console.log(action.payload.data.data);
      return action.payload.data.data;
      },
      [createNewNotificationAsync.fulfilled]: (state, action) => { 
          console.log("adding data successfully");
      }
  },
});

export default NotificationSlice.reducer;

