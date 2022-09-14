export const createNewMessageAsync = createAsyncThunk(
  "message/createNewMessageAsyncAsync",
  async (payload, chatId) => {
    console.log(payload);
    const response = await Axios.post(
        `'http://localhost:5000/api/message/${chat_id}`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }
    );
    const message = response.data;
      return message;
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
    [createNewMessageAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      console.log(action.payload);
      return action.payload.data;
    },
    [getAllMessagesAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      console.log(action.payload.data.data);
      return action.payload.data.data;
    },
  },
});
