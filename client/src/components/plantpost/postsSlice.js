import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {client} from '../../API/client'



export const fetchUploads = createAsyncThunk(
  "uploads/fetchUploads",
  () => {
    return fetch("/uploads")
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const addNewPost = createAsyncThunk(
  'uploads/addNewUpload',
  async (initialPost) => {
    const response = await client.post('/uploads', initialPost)
    return response.data
  }
)




const postsSlice = createSlice({
  name: "uploads",
  initialState: {
    entities: [], 
    status: "idle", 
  },
  reducers: {
     uploadAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push( action.payload);
       },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchUploads.pending](state) {
      state.status = "loading";
    },
    [fetchUploads.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    
  },
});




export const { uploadAdded } = postsSlice.actions;
export default postsSlice.reducer;
