import { useParams } from "react-router"

export const User=()=>{
    const {userid}=useParams();
    return (
        <h1 className="w-[80%] mx-auto text-center px-8 py-8 bg-gray-700 text-white font-[800] text-2xl">User: {userid}</h1>
    )
}