import Item from "./Item"
const List = ({todos,setTodos}) =>{
   
    return(
        <div className="intro">
        <ol>
           {
             todos.length===0?"Add your todo list": todos.map((todo,i)=> <Item setTodos={setTodos} todo = {todo} key = {i}/>)
             
           }
        </ol>
        </div>
    )
}

export default List
