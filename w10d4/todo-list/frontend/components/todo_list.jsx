import React from 'react';

const TodoList = (props) => {
  let titles = props.todos.map( todo => <li>{ todo.title }</li>  )
  return (
    <>
      <ul>
        { titles }
      </ul>
    </>
  )
}

export default TodoList;