import { useState } from 'react'
import './App.css'

function App() {
  
const [counter,setCounter]=useState(15)

const AddCount=()=>{
  if(counter<=19){
    setCounter(counter+1)
  }else{
    alert("cann't increase value after 20")
  }
}
const RemoveCount=()=>{
  if(counter>=1){
    setCounter(counter-1);
  }else{
    alert("cann't decrease value after 0")
  }
}
  return (
    <>
     <h1>Counter App</h1>
     <h2>Value: {counter}</h2>

     <button
     onClick={AddCount}
     >Increase Value: {counter}</button>
     <br />
     <br />
    <button
    onClick={RemoveCount}
    >Decrease Value: {counter}</button>
    </>
  )
}

export default App
