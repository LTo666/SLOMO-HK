import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'
import authReducer from './authSlice'
import blogReducer from './blogSlice'
import firstReducer from './firstSlice'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    searchStore: searchReducer,
    cartStore: cartReducer,
    orderStore: orderReducer,
    authStore: authReducer,
    blogStore: blogReducer,
    firstStore: firstReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store