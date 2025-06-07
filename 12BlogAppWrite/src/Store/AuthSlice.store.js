import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null
}

const AuthSlice=createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        logIn(state,action){
            state.status=true;
            state.userData=action.payload
        },
        logOut(state){
            state.status=false;
            state.userData=null
        }
    }
})

export const  {logIn,logOut} = AuthSlice.actions
export default AuthSlice.reducer