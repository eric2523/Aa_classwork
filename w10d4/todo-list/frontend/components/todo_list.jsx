import React from 'react';
import TodoListItem from './todo_list_item'

const TodoList = (props) => {
  //create array of list elements with each Todo's title
  let titles = props.todos.map( todo => <TodoListItem key={todo.id} title={todo.title}/>  )
  return (
    <>
      <ul>
        { titles }
      </ul>
    </>
  )
}

export default TodoList;