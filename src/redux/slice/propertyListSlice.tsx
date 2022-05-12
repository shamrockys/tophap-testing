import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiPropertyGetList } from 'utils/api'
import { PropertyListState } from 'redux/types'

const initialState: PropertyListState = {
  list: [],
  initialized: false,
}

// thunk

const getPropertyList = createAsyncThunk(
  'getPropertyList',
  async () => {
    const response = await apiPropertyGetList()
    return response.data
  }
)

// slice

export const propertyListSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyList.fulfilled, (state, action) => {
        state.list = action.payload
        state.initialized = true
      })

  }
})

export const actions = {
  ...propertyListSlice.actions,
  getPropertyList,
}

export default propertyListSlice
