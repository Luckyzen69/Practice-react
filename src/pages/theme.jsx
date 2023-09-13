import { useState } from "react"
export default function Theme(){
    // let theme = "DARK"
    // theme ="LIGHT"
    // let theme = "Light"
    const [theme,setTheme]= useState("LIGHT") //return {light,dark}
    const darkTheme =()=>{
        // theme="dark"
        setTheme("DARK") //onlyy change state using their mutator
        // console.log({theme});
    }
    const lightTheme =()=>{
        // theme="light"
        setTheme("LIGHT")
        // console.log({theme});
    }
    return<>
    <div className={ ` ${theme === "DARK" ? "dark-theme":""}`} style={{height:"100vh"}}>
    <button onClick={lightTheme}>light theme</button>
    <button onClick={darkTheme}>dark theme</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quibusdam similique sit minus labore, accusamus eaque amet! Itaque distinctio nesciunt, maxime maiores culpa alias. Tenetur explicabo ipsam fugit adipisci reiciendis.</p>
    </div>
    </>
}