import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../Container/Container";
import { Logo } from "../Logo";
import { LogoutBtn } from "./LogoutBtn";

export const Header=()=>{

    const authStatus=useSelector((state)=>state.authReducers.status);
    
    const navigate=useNavigate();
    const navItem=[
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus
        },
        {
            name:'Signup',
            slug:'/signup',
            active:!authStatus
        },
        {
            name:'AllPost',
            slug:'/all-post',
            active:authStatus
        },
        {
            name:'AddPost',
            slug:'/add-post',
            active:authStatus
        }
    ]

    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
            <nav className="flex">
                <div className="mr-4">
                        <NavLink to='/'>
                            <Logo width="70px" />
                        </NavLink>
                </div>
                <ul className="flex ml-auto">
                    {
                        navItem.map((item)=>(
                            item.active? 
                            <li key={item.name}>
                                <button
                                onClick={()=>navigate(item.slug)}
                                className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                >{item.name}</button>
                            </li>
                            :null
                        ))
                    }
                    {
                        authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }

                </ul>
            </nav>

            </Container>

        </header>
    )
}