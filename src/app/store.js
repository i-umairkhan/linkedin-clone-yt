import { configureStore } from "@reduxjs/toolkit";
import userReucer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReucer,
  },
});
