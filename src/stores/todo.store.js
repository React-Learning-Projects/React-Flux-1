import {EventEmitter} from 'events'
import dispacter from '../dispatcher'
class TodoStore extends EventEmitter { 
    constructor() { 
        super() 
        this.todos = [
            {
                id: 1, 
                text: "TODO 1", 
                complete: false 
            }, 
            {
                id: 2,
                text: "TODO 2 2", 
                complete: false 
            }
        ]
    }

    createTodo(text) { 
        this.todos.push({
            text, 
            complete:false, 
            id: Date.now() 
        })
        this.emit("change")
    }

    getAll() { 
        return [...this.todos]
    }

    handleActions(action) { 
        switch(action.type){ 
            case "ADD_TODO": { 
                this.createTodo(action.text)
            }
        }
    }
}

const todoStore = new TodoStore
window.addTodo = (text) =>  {
    todoStore.createTodo(text)
}
dispacter.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispacter
export default todoStore
