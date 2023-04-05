import { createSlice } from "@reduxjs/toolkit"

export const firstSlice = createSlice({
  name: "first",
  initialState: true,
  reducers: {
    setFirstFalse: (state) => (state = false),
  },
})

export const { setFirstFalse } = firstSlice.actions

export default firstSlice.reducer
