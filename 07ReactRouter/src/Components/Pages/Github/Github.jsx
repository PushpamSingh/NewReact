import { useEffect, useState } from "react";
import axios from 'axios';
import { useLoaderData } from "react-router";
export const Github=()=>{
    // const [data,setData]=useState({});

    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try {
    //             const responce=await axios.get('https://api.github.com/users/PushpamSingh');
    //             console.log("Responce: ",responce);
    //             setData(responce.data)
                
    //         } catch (error) {
    //             console.log("Error: ",error);
    //             throw error;
    //         }
    //     }
    //     fetchData()
    // },[])

    //? fetching api from router 
    const data=useLoaderData()
    return (

        <div className="w-[90%] bg-gray-600 mx-auto text-white">

            <div className="flex justify-center items-center gap-56 p-8">
                <div>
                    <img 
                    className="h-[500px]"
                    src={data?.avatar_url} alt="image1" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-[700]">User Name: {data?.login}</h1>
                    <h1 className="text-2xl font-[700]">Followers: {data?.followers}</h1>
                    <h1 className="text-2xl font-[700]">Followings: {data?.following}</h1>
                </div>
            </div>

        </div>
    );
}

export const githubApi=async()=>{
      try {
                const responce=await axios.get('https://api.github.com/users/PushpamSingh');
                return responce.data
                
            } catch (error) {
                console.log("Error: ",error);
                throw error;
            }
}