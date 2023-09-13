import { useState } from "react";
export default function InputField(){
    /* useState setup... */
    const [inputValue,setInputValue] = useState("hello")

    function onChangeInput(event){
        console.log("changes....",event.target.value);
        setInputValue(event.target.value);
    }

    return <>
      <h1>  input: {inputValue} </h1>
        <input onChange={onChangeInput} type="text" name="" id="" />
    </>
}