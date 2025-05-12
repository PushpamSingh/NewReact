import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../Context/userContext";

export const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const userData=useContext(UserContext);
    console.log("userData: ",userData );
    
    const handelFormSubmit=(e)=>{
        e.preventDefault();
        userData.setUser(username)
    }
    return (
        <>
            <div>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                <button
                onClick={handelFormSubmit}
                >Submit</button>
            </div>
        </>
    );
}