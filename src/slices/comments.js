import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

export const initialState = {
  loading: false,
  errors: false,
  list: []
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.errors = false;
    },
    getCommentsError: (state) => {
      state.loading = false;
      state.errors = true;
    }
  }
});

const commentsActionCreator = getApiActionCreator("comments");
export const commentsActions = {
  ...commentsActionCreator("getComments")
};
export default commentsSlice.reducer;
