import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import './pages.products.jsx'
// import './tables' 
import Todos from './pages/todos'
import ProductsTwo from './pages/ProductsTwo'
// let userRole ="ADMIN"

let userCount = 3 
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <products/> */}
    {/* <Todos /> */}
    <ProductsTwo />
  </div>

)
