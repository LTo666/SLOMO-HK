import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    searchStore: searchReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store