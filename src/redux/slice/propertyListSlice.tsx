import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiPropertyGetList, apiPropertyFilterList } from 'utils/api'
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

const filterPropertyList = createAsyncThunk(
  'filterPropertyList',
  async (params: string) => {
    const response = await apiPropertyFilterList(params)
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
      .addCase(filterPropertyList.fulfilled, (state, action) => {
        state.list = action.payload
      })

  }
})

export const actions = {
  ...propertyListSlice.actions,
  getPropertyList,
  filterPropertyList
}

export default propertyListSlice
