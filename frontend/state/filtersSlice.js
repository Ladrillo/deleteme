import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { size: 'All' },
  reducers: {
    selectSizeFilter(state, action) {
      state.size = action.payload
    }
  }
})

export const { selectSizeFilter } = filtersSlice.actions

export default filtersSlice.reducer
