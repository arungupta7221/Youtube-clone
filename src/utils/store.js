import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import searchSlice from './searchSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    searchQuerie: searchSlice,
  },
})

export default store
