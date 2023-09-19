export default function Header(){
    return (<>
              <ul>
            <a href="#">home</a>
            <a href="#">about us</a>
              </ul>
            <ul>
            <button onClick={()=>{
              setGlobalTheme("DARK")
            }}>dark</button>
            <button onClick={()=>{
              setGlobalTheme("LIGHT")
            }}>light</button>

            </ul>
           </>)
}