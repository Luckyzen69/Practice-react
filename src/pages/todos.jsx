
let todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "html",
      "completed": "yes"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "css",
      "completed": "yes"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "javascript",
      "completed": "yes"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "react",
      "completed": "no"
    },
    
]

function Todos(){
  return  <div>
    <h1>Todos</h1>
     <table>
     <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
        
      </thead>
      <tbody>
        <TableRow title ="html" duration= "4days"/>
        <TableRow title ="html" duration= "4days"/>
       
       
      </tbody>
     </table>

     </div>
}
export default Todos