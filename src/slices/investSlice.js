import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addDetails(state, action) {
      state.value++
    },
  },
})

export const { increment, decrement } = productSlice.actions
export default productSlice.reducer