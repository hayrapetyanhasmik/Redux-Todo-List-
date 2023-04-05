import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state,action)=>{
            state.items.push({
                id: Date.now(),     //returns current time in milliseconds 
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state,action)=>{
            const toggle = state.items.find((e)=>e.id===action.payload);
            toggle.completed = !toggle.completed
        },
        deleteTodo: (state,action)=>{
            state.items = state.items.filter((e)=>e.id!==action.payload);
            
        },
        deleteAllTodos: (state,action)=>{
            state.items=[];
        },
},
})

export const {addTodo,toggleTodo,deleteTodo,deleteAllTodos} = todoSlice.actions;
export default todoSlice.reducer;


