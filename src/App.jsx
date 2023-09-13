import Theme from "./pages/theme";
import InputField from "./pages/InpuField";
import { useState } from "react";


export default function App (){
 const [globalTheme,setGlobalTheme] = useState("LIGHT")
 
          return (
          <>
         <div className={`${globalTheme == DARK ? "dark-theme": ""}`}>
          <header style={{display:"flex",justifyContent:"center"}}>
              <ul>
            <a href="#">home</a>
            <a href="#">about us</a>
              </ul>
            <ul>
            <button onClick={()=>{
              setGlobalTheme("DARK")
            }}>dark</button>
            <button onClick={()=>{
              setGlobalTheme("LIGHT")
            }}>light</button>

            </ul>
          </header>
         <InputField/>
        <Theme/>
         </div>
          </>
        )
}
