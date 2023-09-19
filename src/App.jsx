import Theme from "./pages/theme";
import InputField from "./pages/InpuField";
import { useState } from "react";
import Header from "./header";
import TodosState from "./pages/TodosState";
import { Route,Routes,BrowserRouter,Link } from "react-router-dom";
import ComponentLifeCycle from "./ComponentLifeCycle";
import ProductAPI from "./pages/ProductAPI";


export default function App (){
 const [globalTheme,setGlobalTheme] = useState("LIGHT")
 
          return (
          <>
         {/* <div className={`${globalTheme == DARK ? "dark-theme": ""}`}>
          < Header
            currentTheme ={globalTheme}
            s    setGlobalTheme={setGlobalTheme}
            />
         <InputField/>
        <Theme/>
         </div> */}
         {/* <BrowserRouter> */}
            <Link to="/TodosApi">Todo-api</Link>
            <Link to="/ComponentLifeCycle">component-life</Link>
            <Link to="ProductsApi">products</Link>
         <Routes>
          <Route  path = 'TodoApi' element= {<TodosApi/>} />
          <Route  path = 'ComponentLifeCycle' element= {<ComponentLifeCycle/>} />
          <Route  path = 'ProductsApi' element= {<ProductAPI/>} />
         </Routes>
         {/* </BrowserRouter> */}
         {/* <TodosState/> */}  
         
          </>
        )
}
