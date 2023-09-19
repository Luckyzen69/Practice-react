import { useEffect, useState } from "react"
import React from "react";
export default function ComponentLifeCycle(){
    const [state,states]= useState(100);
    const [Input,setInput]= useState("");
    useEffect(()=>{
        console.log("use-effect --mout",[]);
    })
    useEffect(()=>{
        console.log("use-effect --changed",[Input]);
    })
    return <>
    <div>
        <ul>
            <li>mounted</li>
            <li>did update</li>
            <li>DID UNMOUNTER</li>
        </ul>
        <h1>state:{state}</h1>
        <h1>input:{}</h1>
        <button>add
            {/* {setInput(Input)} */}
        </button>
    </div>
    </>
}