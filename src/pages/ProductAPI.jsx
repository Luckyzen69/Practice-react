import axios, { Axios } from "axios"
import { useState,useEffect } from "react";
export default function ProductAPI(){
//     fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
const [products,setProducts] = useState('')
const [countProducts,setCountProducts]=useState(-1)
useEffect(() => setCountProducts(countProducts + 1), [products]);
console.log("before-api-call");
useEffect(()=>{
    axios.get(" https://dummyjson.com/products ") // https://dummyjson.com/products
   .then(res=> {
       setProducts(res.data.products)
})
})
            console.log("afte-api-call");
            return <>
            {JSON.stringify(products)}
    <div>products api</div>
    {
        products.map(el=>{
            return <li>{el}</li>
        })
    }
    </>
}