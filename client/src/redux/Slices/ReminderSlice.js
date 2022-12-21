import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllRemindersAsync = createAsyncThunk(
    "reminder/getAllRemindersAsync",
    async () => {
        console.log("get all reminders");
        const data = await Axios.get(`http://localhost:5000/api/reminder/getallreminders`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
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

export const deleteReminderAsync = createAsyncThunk(
    "reminder/deleteReminderAsync",
    async (id) => {
        const response = await Axios.delete(
            `http://localhost:5000/api/reminder/deletereminder/${id}`,
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

export const updateReminderAsync = createAsyncThunk(
    "reminder/updateReminderAsync",
    async (payload) => {
        const response = await Axios.put(
            `http://localhost:5000/api/reminder/updatereminder/${payload.id}`,
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
    initialState: {},
    reducers: {},
    extraReducers: {
        [getAllRemindersAsync.fulfilled]: (state, action) => {
            state = action.payload.data.data;
            console.log(state);
            return state;
        }
    },
});

//export const {  } = ReminderSlice.actions;
export default ReminderSlice.reducer;