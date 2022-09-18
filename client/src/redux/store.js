import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from './Slices/ChatSlice'
import AuthReducer from "./Slices/AuthSlice";
import MessageReducer from "./Slices/MessageSlice";

export default configureStore({
  reducer: {
        chats: ChatReducer,
        auth: AuthReducer,
    message: MessageReducer,      
  },
});
