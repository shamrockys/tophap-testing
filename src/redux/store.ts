import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper, Context } from 'next-redux-wrapper'
import { AppState } from './types'
import propertyListSlice from './slice/propertyListSlice'
import propertyItemSlice from './slice/propertyItemSlice'
import propertyFilterSlice from './slice/propertyFilterSlice'

export const makeStore = (context: Context) => configureStore({
  reducer: {
    [propertyListSlice.name]: propertyListSlice.reducer,
    [propertyItemSlice.name]: propertyItemSlice.reducer,
    [propertyFilterSlice.name]: propertyFilterSlice.reducer,
  }
})

export const wrapper = createWrapper<Store<AppState>>(makeStore, { debug: true })