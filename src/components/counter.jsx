import { render } from "react-dom";

export default  function Counter(){
    let counterValue = 100;
    const increament = () =>{
        console.log("increament");
        counterValue++
        console.log({counterValue});
    }
    const decreament = () =>{
        console.log("decreament");
        counterValue--
        console.log({counterValue});
    }
    console.log("render");
  return <>
  <p>counter:{counterValue}</p>
  <hr />
  <button onClick={increament}>increament</button>
  <button onClick={decreament}>decreament</button>
  </>
}
