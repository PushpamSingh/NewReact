import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
function App() {
  const [color, setColor] = useState("white");
  const colorObj=["Red","Green","Yellow","Black","Blue","Violet","Aqua","Purple"]
  return (
    <>
      <div className="w-full h-screen duration-3.aq00" style={{ backgroundColor: color }}>
        <div className="bg-[#b6b4b4] fixed flex flex-wrap bottom-10 left-16 right-16 justify-center items-center rounded-3xl px-4 py-1 gap-4 mx-auto">
          {
            colorObj.map((curr,index)=>{
              return <Button key={index} colorName={curr} setColor={setColor}/>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
