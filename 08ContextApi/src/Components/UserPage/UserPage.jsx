import { useContext } from "react"
import UserContext from "../../Context/userContext"

export const UserPage=()=>{
    const userData=useContext(UserContext);

    if(!userData.user){
        return <h1>Please Log in</h1>
    }

    return <h1>Welcome you successfuly login</h1>
}