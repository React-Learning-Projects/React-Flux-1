import dispatcher from "../dispatcher"

export function createTodo(text) { 
    dispatcher.dispatch({
        type: "ADD_TODO",
        text 
    })
}
export function deleteTodo(id) { 
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    })
}