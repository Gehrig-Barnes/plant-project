import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "../plantpost/postsSlice";


export default configureStore({
  reducer: {
    posts: postsReducer,
  }
})