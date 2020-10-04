import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = (props) => {
  //create array of TodoItem components with each Todo's title
  let titles = props.todos.map( todo => <TodoListItem key={todo.id} title={todo.title}/>  )
  return (
    <>
      <ul>
        { titles }
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </>
  )
}

export default TodoList;