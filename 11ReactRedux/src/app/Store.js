import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../CreateSlice/TodoSlice'
export const store=configureStore({
    reducer:todoReducer
})