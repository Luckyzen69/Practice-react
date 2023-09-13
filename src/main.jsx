import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import './pages.products.jsx'
// import './tables' 
import Todos from './pages/todos'
import ProductsTwo from './pages/ProductsTwo'
import Counter from './components/counter'
import CounterState from './components/counter'
import Theme from './pages/theme'
import InputField from './pages/InpuField'
import App from './App'
// let userRole ="ADMIN"

let userCount = 3 
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <products/> */}
    {/* <Todos /> */}
    {/* <ProductsTwo /> */}
    {/* <Counter/> */}
    {/* <CounterState/> */}
    {/* <InputField/> */}
    {/* <hr /> */}
    {/* <Theme/> */}
    <App/>
  </div>

)
