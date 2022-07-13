import { createSlice } from "@reduxjs/toolkit"

export const blogSlice = createSlice({
  name: "blog",
  initialState: { blogId: -1, blogPostDate: "" },
  reducers: {
    changeBlog: (state, action) => {
      state.blogId = action.payload.blogId
      state.blogPostDate = action.payload.blogPostDate
    },
    resetBlog: (state) => {
      state.blogId = -1
      state.blogPostDate = ""
    },
  },
})

export const { changeBlog, resetBlog } = blogSlice.actions

export default blogSlice.reducer