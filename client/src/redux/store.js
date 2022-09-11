import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from './Slices/ChatSlice'
import AuthReducer from "./Slices/AuthSlice";

export default configureStore({
  reducer: {
        chats: ChatReducer,
        auth: AuthReducer,
  },
});
