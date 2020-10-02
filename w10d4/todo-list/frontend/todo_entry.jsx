import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo, receiveTodos } from './actions/todo_actions'
import Root from './components/root'
import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('content')
    const store = configureStore();
    ReactDOM.render(<Root store={ store } />, root)

    //testing on the window
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
})

// const newTodos = [
//   {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true,
//   },
// ];