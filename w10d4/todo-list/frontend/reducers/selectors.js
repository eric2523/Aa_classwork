export const allTodos = (state) => {
  return Object.keys(state).map((todoId) => {
    return state[todoId]
  })
};
