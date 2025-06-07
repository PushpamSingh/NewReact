import React from 'react'
import {useDispatch} from 'react-redux'
import {logOut} from '../../Store/AuthSlice.store'
import authService from '../../AppWrite/Auth.service'

export const LogoutBtn=()=>{

    const dispatch=useDispatch();
    const logouthandler=async()=>{
        try {
            await authService.LogOut();
            dispatch(logOut());
        } catch (error) {
            throw error
        }
    }
    
    return(
        <button  
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logouthandler}
        >LogOut Btn</button >
    )
}