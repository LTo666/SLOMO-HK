import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartList: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartList = state.cartList.concat([action.payload])
    },
    removeFromCart: (state, action) => {
      let newState = state.cartList
      newState.splice(action.payload, 1)
      state.cartList = [...newState]
    },
    clearCart: (state) => {
      state.cartList = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer