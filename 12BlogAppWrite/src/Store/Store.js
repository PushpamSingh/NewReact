import {configureStore} from "@reduxjs/toolkit";
import authReducers from "../Store/AuthSlice.store"
export const Store=configureStore({
    reducer:{
        authReducers
    }
})