import { useEffect, useState } from "react"
import {useCurrencyInfo} from "./Hooks/useCurrencyInfo.js"
import { InputCountry } from "./Components/InputCountry";

function App() {
    const [amount,setAmount]=useState(0);
    const [convertedAmount,setConvertedAmount]=useState(0);
    const [from,setFrom]=useState('USD');
    const [to,setTo]=useState("INR");
    const [countryObj,setCountryObj]=useState([]);
   useEffect(()=>{
    const fetchData=async()=>{
    const res=await useCurrencyInfo(from);
    const obj=Object.keys(res.conversion_rates);
    setCountryObj(obj)
    }
    fetchData()
   },[])
    
  //  console.log("Country obj=",countryObj);
   
    const convertAmount=async()=>{
      const responce=await useCurrencyInfo(from);
      // console.log("currecncyinfo: ",responce);
      const calculatedAmount=amount*responce.conversion_rates[to]
      setConvertedAmount(calculatedAmount)
      
    }
    // console.log("Amount: ",amount);
    // console.log("From: ",from);
    // console.log("TO: ",to);
    const swapFunc=()=>{
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
    }
    
  return (
    <>
      <div 
      style={{backgroundImage:`url("https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600")`,backgroundSize:'cover'}}
      className="h-screen w-full bg-black flex justify-center items-center" 
      >
       <div className="w-[600px] h-96 bg-[#ffffff73] flex flex-col gap-6 rounded-xl p-4 relative">
         <InputCountry 
         label="From"
         amount={amount}
         onChangeAmount={setAmount}
         country={countryObj}
         initialCountry={from}
         onCoutryChange={setFrom}
         />
         <button 
         onClick={swapFunc}
         className="bg-blue-600 px-6 py-2 absolute text-white border-2 border-white rounded-xl cursor-pointer duration-200 hover:bg-blue-800 active:scale-[0.7] left-[40%]  top-[38%]"
         >swap</button>
         <InputCountry
         label="To"
         isDisabled
         amount={convertedAmount}
         country={countryObj}
         initialCountry={to}
         onCoutryChange={setTo}
         />
        <button 
        className="bg-blue-600 py-2 text-white font-[700] duration-200 hover:bg-blue-800 active:scale-[0.9] cursor-pointer"
        onClick={convertAmount}
        >Convert {from} to {to}</button>
       </div>

      </div>
    </>
  )
}

export default App
