export const RECEIVE_TODOS = "RECEIVE_TODOS"; //passing it along to avoid miss-spelling
export const RECEIVE_TODO = "RECEIVE_TODO"; //passing it along to avoid miss-spelling

//will pass these functions to a dispatcher at some point

export const receiveTodos = (todos) => ({ //todos is an array get from the store.state, maybe
    type: RECEIVE_TODOS, //once we get into our reducer, we need to grab the "type"
    todos: todos
})

export const receiveTodo = (todo) => ({ // the () makes it an implicit, also only works on one-liners
                                // recieves a POJO, and sets the POJO under the key of "todo" in the returned object
    type: RECEIVE_TODO, //an object since it is singular
    todo: todo
})


//default is only for a single
