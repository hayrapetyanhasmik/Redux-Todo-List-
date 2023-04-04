import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addTodo,toggleTodo,deleteTodo,deleteAllTodos} from './todoSlice';


export default function Todo(){
    const [value,setValue] = useState("");
    const data = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    function add(){
        if(value.length===0){
            alert("Enter any todo")
        }
        dispatch(addTodo(value));
        setValue("");
    }

    return(
        <div className="container">
        <div className="header">
            <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <button onClick={add}>Add a Todo</button>
            <button onClick={()=>dispatch(deleteAllTodos())}>Delete All</button>
        </div>
            {data.map((val)=>{
                return(
                    <div key={val.id} className="row">
                        <input type="checkbox" checked={val.completed} onChange={()=>dispatch(toggleTodo(val.id))}></input>
                        <span className={val.completed? "completed":""}>{val.text}</span>
                        <button onClick={()=>dispatch(deleteTodo(val.id))} className="btnDelOne">X</button>
                    </div>
                )
            })}
            
        </div>
    )
}

