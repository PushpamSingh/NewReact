import { useState } from "react"
import { ThemeContextProvider } from "./Context/ThemeContext"
import { useEffect } from "react";
import { Card } from "./Components/Card";
import { ToggleBtn } from "./Components/ToggleBtn";

function App() {
  const [themeMode,setThemeMode]=useState("light");

  const darkTheme=()=>{
    setThemeMode("dark");
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }

  //? Actual change in theme
  useEffect(()=>{
    const html=document.querySelector('html');
    html.classList.remove('light','dark');
    html.classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ToggleBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
     </div>
    </ThemeContextProvider>
  )
}

export default App
