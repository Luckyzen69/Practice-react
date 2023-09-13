function useState (initialValue){
    const mutatorfunction =()=> {}
  return [ initialValue, mutatorfunction]
}
console.log(useState(100));
const [value,setValue] = useState(100);
console.log({value});
console.log({setValue});