import { useEffect, useState } from "react"
import { TodoContextProvider } from "./Context/TodoContext"
import { TodoForm } from "./Components/TodoForm";
import { TodoItems } from "./Components/TodoItems";

function App() {
    const [todo,setTodo]=useState([]);

    const addTodo=(todo)=>{
        setTodo((prev)=>([...prev,{...todo,id:Date.now(),...todo}]))
    }
    const updateTodo=(id,todo)=>{
        setTodo((prev)=>(prev.map((curr)=>curr.id===id ? todo : curr)))
    }
    const deleteTodo=(id)=>{
        setTodo((prev)=>(prev.filter((curr)=>curr.id!==id)))
    }
    const toggleComplete=(id)=>{
        setTodo((prev)=>(prev.map((curr)=>curr.id===id? {...curr,completed:!curr.completed} : curr)))
    }

    //?local storage
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem('todos'))
        if(todos && todos.length>0){ 
        setTodo(todos)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todo))
    },[todo])

  return(
    <TodoContextProvider value={{todo,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                    <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {
                        todo.map((curr)=>{
                            return <div key={curr.id} className="w-full">
                                <TodoItems todo={curr}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </TodoContextProvider>
  )
}

export default App
