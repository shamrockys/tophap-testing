import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper, Context } from 'next-redux-wrapper'
import { AppState } from './types'
import propertyListSlice from './slice/propertyListSlice'
import propertyItemSlice from './slice/propertyItemSlice'

export const makeStore = (context: Context) => configureStore({
  reducer: {
    [propertyListSlice.name]: propertyListSlice.reducer,
    [propertyItemSlice.name]: propertyItemSlice.reducer,
  }
})

export const wrapper = createWrapper<Store<AppState>>(makeStore, { debug: true })