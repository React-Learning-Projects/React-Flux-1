import React, {useEffect, useState, useRef} from "react"
import TodoStore from '../stores/todo.store'
import { createTodo } from "../actions/todo.action"
export default (props) => { 
    const [todos, setTodos] = useState(TodoStore.getAll())

    useEffect(() => { 
        TodoStore.on('change', () => {
            setTodos(TodoStore.getAll())
        })
    })

    const inputRef = useRef(null) 

    return (<>
        <h1> Todo Page </h1> 
        <div>
            <input ref={inputRef}></input>
            <button onClick={() => {
                createTodo(inputRef.current.value)
            } }>submit</button> 
        </div> 
        <div> 
            {[...todos].map(todo => <div>{todo.text}</div>)}
        </div> 
    </>); 
}