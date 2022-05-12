
import { createSlice } from '@reduxjs/toolkit'
import { PropertyFilterState } from 'redux/types'

const initialState: PropertyFilterState = {
  address: '',
  bedsMin: null,
  bedsMax: null,
  bathsMin: null,
  bathsMax: null,
}

const propertyFilterSlice = createSlice({
  name: 'propertyFilter',
  initialState,
  reducers: {
    update(state, action) {
      state.address = action.payload.address ?? state.address
      state.bedsMin = action.payload.bedsMin ?? state.bedsMin
      state.bedsMax = action.payload.bedsMax ?? state.bedsMax
      state.bathsMin = action.payload.bathsMin ?? state.bathsMin
      state.bathsMax = action.payload.bathsMax ?? state.bathsMax
    },
    reset: () => initialState
  },
});

export const actions = propertyFilterSlice.actions

export default propertyFilterSlice