import { ThunkAction, Action } from '@reduxjs/toolkit'

// property types

export interface PropertyAddress {
  fullAddress: string
}

export interface Property {
  id: string
  address: PropertyAddress
  beds: number
  baths: number
  price: number
  pricePerSqft: number
  livingSqft: number
  yearBuilt: string
}

export interface PropertyFull extends Property {
  photo: string
}

export interface PropertyListState {
  list: Property[]
  loading: boolean
}

export interface PropertyItemState {
  [index: string]: PropertyFull
}

// app types

export type AppState = {
  propertyList: PropertyListState
  propertyItem: PropertyItemState
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>