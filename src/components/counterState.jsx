import { render } from "react-dom";
import {useState} from 'react';
 export default  function CounterState(){
    // let counterValue = 100;
    let initialValue = 100
    const [counterValue,setCounterValue] = useState(initialValue)
    const increament = () =>{
        console.log("increament");
        // counterValue++
        // console.log({counterValue});
        setCounterValue(counterValue + 1)
    }
    const decreament = () =>{
        console.log("decreament");
        // counterValue--
        // console.log({counterValue});
        setCounterValue(CounterValue - 1);
    }
    console.log("render");
  return <>
  <p>counter:{counterValue}</p>
  <hr />
  <button onClick={increament}>increament</button>
  <button onClick={decreament}>decreament</button>
  </>
}
