import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllRemindersAsync = createAsyncThunk(
    "reminder/getRemindersAsync",
    async () => {
        const response = await Axios.get("http://localhost:5000/api/reminder/getallreminders", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const reminders = response.data;
        return reminders;
    }
);

export const createNewReminderAsync = createAsyncThunk(
    "reminder/createNewReminderAsync",
    async (payload) => {
        const response = await Axios.post(
            `http://localhost:5000/api/reminder/addreminder`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const reminder = response.data;
        return reminder;
    }
);




const ReminderSlice = createSlice({
    name: "reminder",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAllRemindersAsync.fulfilled]: (state, action) => {
            return action.payload;
        }
    },
});

export default ReminderSlice.reducer;