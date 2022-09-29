import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Slices/ChatSlice";
import AuthReducer from "./Slices/AuthSlice";
import MessageReducer from "./Slices/MessageSlice";
import UserReducer from "./Slices/UserSlice";

export default configureStore({
  reducer: {
    chats: ChatReducer,
    auth: AuthReducer,
    user: UserReducer,
    message: MessageReducer,
  },
});
