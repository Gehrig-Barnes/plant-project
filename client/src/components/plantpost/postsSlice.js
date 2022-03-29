import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../API/client";

export const fetchUploads = createAsyncThunk("uploads/fetchUploads", () => {
  return fetch("/uploads")
    .then((response) => response.json())
    .then((data) => data);
});

export const addNewPost = createAsyncThunk(
  "uploads/addNewUpload",
  async (initialPost) => {
    const response = await client.post("/uploads", initialPost);
    return response.data;
  }
);

export const deleteUpload = createAsyncThunk(
  "uploads/deleteUpload",
  async (commentId) => {
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return commentId;
  }
);

export const updateUpload = createAsyncThunk(
  "uploads/updateUpload",
  async (updateUpload) => {
    return fetch(`/uploads/${updateUpload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUpload),
    }).then((res) => res.json());
  }
);

const postsSlice = createSlice({
  name: "uploads",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {
    uploadAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchUploads.pending](state) {
      state.status = "loading";
    },
    [fetchUploads.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [updateUpload.fulfilled](state, action) {
      state = state.filter((upload) => upload.id !== action.payload.id);
      state = [...state, action.payload];
    },
  },
});

export const { uploadAdded } = postsSlice.actions;
export default postsSlice.reducer;
