import { RECEIVE_TODOS } from "../actions/todo_actions"; 
import { RECEIVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true,
  },
};

const todoReducer = (oldState = initialState, action) => { 
    const nextState = Object.assign({}, oldState); 

    switch (action.type) { 
        case RECEIVE_TODOS:
            let todosArr = action.todos 
            todosArr.forEach((todo) => {                   
              nextState[todo.id] = todo;
            })
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState; //return updated slice of state
        default:
            return oldState;
    }
}

export default todoReducer;
