export const Button=({colorName,setColor})=>{
    return (
        <>
         <button
          className={`bg-[${colorName.toLowerCase()}] text-white px-6 py-1 rounded-full flex justify-center items-center font-[600] text-l cursor-pointer`}
          onClick={()=>setColor(colorName.toLowerCase())}
          >{colorName}</button>
        </>
    )
}