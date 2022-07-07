import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    searchStore: searchReducer,
    cartStore: cartReducer,
    orderStore: orderReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store