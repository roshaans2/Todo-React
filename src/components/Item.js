const Item = ({todo,key,setTodos}) =>{
    const handleDelete = (todo) => {
          setTodos(prevTodos=> prevTodos.filter(item=>item!==todo))
    }
    return (
       <li key={key}> {todo} &nbsp; <button onClick = {()=> handleDelete(todo)}>Remove</button> </li>
    )
}

export default Item 