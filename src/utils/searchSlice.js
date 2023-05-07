import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'searchQuerie',
  initialState: {},
  reducers: {
    cachedResults: (state, action) => {
      state = Object.assign(state, action.payload)
    },
  },
})
export const { cachedResults } = searchSlice.actions
export default searchSlice.reducer
