import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import  authService from "./AppWrite/Auth.service.js";
import {logIn,logOut} from "./Store/AuthSlice.store.js"
import {Outlet} from "react-router"
import { Footer } from "./Components/Footers/Footer.jsx";
import { Header } from "./Components/Headers/Header.jsx";
function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
   const fetchData=async()=>{
     authService.GetCurrentUser()
     .then((userData)=>{
      if(userData){
        dispatch(logIn({userData}))
      }else{
        dispatch(logOut());
      }
     }).finally(()=>setLoading(false))
   }

   fetchData()
  },[])
  

  return !loading?(
    <div className="max-w-screen h-screen bg-slate-400 content-center ">
      <div className="w-full flex flex-col justify-center items-center">
      <Header/>
      <main>
        //TODO: <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
  ):(
    <div>loading...</div>
  )
}

export default App
