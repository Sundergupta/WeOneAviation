import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  placeholder: 'ready',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPlaceholder(state, action) {
      state.placeholder = action.payload
    },
  },
})

export const { setPlaceholder } = appSlice.actions

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
})

export default store
