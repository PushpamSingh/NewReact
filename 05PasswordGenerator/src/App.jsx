import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setCharacterAllowed]=useState(false);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str+="0123456789"
    }

    if(characterAllowed){
      str+="~!@#$%^&*(){}[]_"
    } 
      

    for (let i = 1; i <= length; i++) {
      let charInd=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(charInd);
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,characterAllowed,length,setPassword])

  //? useRef() hook
  const inputCopyRef=useRef(null);

  const copytotheClipboard=useCallback(()=>{
    inputCopyRef.current?.select()
    inputCopyRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className='bg-gray-600 max-w-2xl mx-auto mt-20 text-center text-white rounded-2xl flex flex-col gap-4'>
        <div className='p-2'>
          <h1 className='text-xl font-[600]'>Password Generator</h1>
        </div>
        <div className='w-[80%] mx-auto flex'>
          <input 
          type="text" 
          readOnly
          placeholder='Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          ref={inputCopyRef}
          className='outline-none w-[90%] bg-gray-200 px-2 py-2 rounded-tl-xl rounded-bl-xl text-gray-800'
          />
          <button 
          onClick={copytotheClipboard}
          className='w-[10%] bg-blue-600 cursor-pointer rounded-tr-xl rounded-br-xl hover:bg-blue-800 active:scale-[0.9]'>Copy</button>
        </div>
        <div className='w-[80%] mx-auto flex gap-5 justify-center items-center'>
            <div className='flex gap-2 justify-center items-center'>
              <input 
              type="range" 
              min={6}
              max={50}
              value={length}
              onChange={(e)=>setLength(e.target.value)}
              id='range'
              className='cursor-pointer'
              />
              <label htmlFor="range">Length: {length}</label>
            </div>
            <div className='flex justify-center items-center'>
              <input 
              type="checkbox" 
              id='numbercheckBox'
              value={numberAllowed}
              onChange={()=>setNumberAllowed((prev)=>!prev)}
              className='w-7 scale-[1.5]'
              />
              <label htmlFor="numbercheckBox">Number</label>
            </div>
            <div className='flex justify-center items-center'>
              <input 
              type="checkbox" 
              id='numbercheckBox'
              value={characterAllowed}
              onChange={()=>setCharacterAllowed((prev)=>!prev)}
              className='w-7 scale-[1.5]'
              />
              <label htmlFor="numbercheckBox">Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
