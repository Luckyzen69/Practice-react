let userRole ="ADMIN"

function TableRow(props){
  console.log("title is",props);
  return (
    <div className="project">
      <img src="https://picsum.photos/200/300" alt="image" />
    <h2> {props.title}</h2>
    <p>{props.discription}</p>
 { userRole == " ADMIN" &&
 <button>delete</button>}

    </div>
    )
}
let userCount = 3 
ReactDOM.createRoot(document.getElementById('root')).render(

)
