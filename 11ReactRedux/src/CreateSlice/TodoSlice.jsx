import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

export const TodoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                todo:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos=state.todos.filter((curr)=>(curr.id!==action.payload))
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((curr)=>(curr.id===action.payload.id ? {...curr,todo:action.payload.todoMsg} : curr))
        },
        toggleComplete:(state,action)=>{
            state.todos=state.todos.map((curr)=>(curr.id===action.payload ? {...curr,completed:!curr.completed} : curr))
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleComplete}=TodoSlice.actions;
export default TodoSlice.reducer;