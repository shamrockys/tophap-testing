
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppThunk, PropertyItemState } from 'redux/types'
import { PropertyFull } from 'redux/types'

const initialState: PropertyItemState = {}

const propertyItemSlice = createSlice({
  name: 'propertyItem',
  initialState,
  reducers: {
    setPropertyItem(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.propertyItem
      }
    },
  },
});

export const setPropertyItem: any = (id: string, data: PropertyFull): AppThunk => async (dispatch) => {
  dispatch(
    propertyItemSlice.actions.setPropertyItem({
      [id]: data
    })
  )
}

export default propertyItemSlice