import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import authService from "../AppWrite/Auth.service";
import {logIn as storelogIn} from "../Store/AuthSlice.store"
import { Logo } from "./Logo";
import {Input} from "./Input"
import { Button } from "./Button";
export const Login=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit}=useForm();
    const [error,setError]=useState("");

    const handleLogin=async(data)=>{
        setError("")
        try {
            const session=await authService.LogIn(data);
            if(session){
                const userdata=await authService.GetCurrentUser();
                if(userdata) dispatch(storelogIn(userdata))
                navigate("/")
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"></Logo>
                    </span>
                </div>
                 <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                  <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                 {
                    error && <p className="text-red-600 mt-8 text-center">{error}</p>
                 }

                 <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            type="email"
                            label="Email: "
                            placeholder="Enter your email"
                            {
                                ...register("email",{
                                    required:true,
                                    validate:(value)=>
                                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(value) ||
                                        "Please Enter valid email"
                                    
                                })
                            }
                        />
                        <Input
                        type="password"
                        label="password"
                        placeholder="Enter your password"
                        {
                            ...register("password",{
                                required:true
                            })
                        }
                        />

                        <Button 
                        type="submit"
                        children="Sign In"
                        classname="w-full"
                        />

                    </div>

                 </form>
            </div>
        </div>
    );
}