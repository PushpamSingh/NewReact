import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import  authService from "./AppWrite/Auth.service.js";
import {logIn,logOut} from "./Store/AuthSlice.store.js"
import {Outlet} from "react-router"
import { Footer } from "./Components/Footers/Footer.jsx";
import { Header } from "./Components/Headers/Header.jsx";
// import { RTE } from "./Components/RTE.jsx";
function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
   const fetchData=async()=>{
    //  authService.GetCurrentUser()
    //  .then((userData)=>{
    //   if(userData){
    //     dispatch(logIn({userData}))
    //   }else{
    //     dispatch(logOut());
    //   }
    //  }).finally(()=>setLoading(false))

    try {
      const userData=await authService.GetCurrentUser();
      // console.log("userData: ",userData);
      
      if(userData){
        dispatch(logIn(userData))
      }else{
        dispatch(logOut())
      }
      
    } catch (error) {
      throw error;
    }finally{
      setLoading(false)
    }
   }

   fetchData()
  },[])
  

  return !loading?(
    <div className="max-w-screen h-screen bg-slate-300 content-center">
      <div className="w-full flex flex-col justify-center">
      <Header/>
      <main>
        
         <Outlet/>
        {/* <RTE></RTE> */}
      </main>
      <Footer/>
      </div>
    </div>
  ):(
    <div className="mx-autu flex w-full h-screen justify-center items-center">
      <h1>loading...</h1>
    </div>
  )
}

export default App
