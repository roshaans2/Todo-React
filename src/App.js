import { useState,useEffect } from "react"
import AddTodo from "./components/AddTodo"
import Heading from "./components/Heading"
import List from "./components/List"



export const App = ()=>{
  let [todos,setTodos] = useState([])

  // useEffect(() => {
  //   window.alert("Todo Updated")
  // },[todos])

  return(
     <div>
       <Heading/>
       <List setTodos = {setTodos} todos={todos} />
       <AddTodo setTodos={setTodos}/>
     </div>
  )
}



export default App