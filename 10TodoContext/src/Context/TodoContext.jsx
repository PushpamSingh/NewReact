import { useContext } from "react";
import { createContext } from "react";

export const TodoContext=createContext({
    todo:[],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}