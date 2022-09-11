import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Profile/plantpost/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
