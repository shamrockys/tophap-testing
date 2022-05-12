import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { makeStore } from './store'
import { AppState } from './types'

type AppDispatch = ReturnType<typeof makeStore>["dispatch"]

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector