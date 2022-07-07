import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
  name: "order",
  initialState: { order: [] },
  reducers: {
    placeOrder: (state, action) => {
      state.order = state.order.concat([action.payload])
    },
  },
})

export const { placeOrder } = orderSlice.actions

export default orderSlice.reducer