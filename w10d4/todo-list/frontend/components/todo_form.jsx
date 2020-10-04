import React from 'react'

class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { id: new Date().getTime(), title: "", body: "", done: false}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBody = this.handleBody.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSelect = this.handleSelect.bind(this) 
  }

  handleSubmit(){
    event.preventDefault();
    this.props.receiveTodo(this.state)
    this.setState({
      id: new Date().getTime(),
      title: "",
      body: "",
      done: false,
    });
  }

  handleSelect(){
    let done = event.target.value 
    this.setState({done})
  }

  handleTitle() {
    let title = event.target.value
    this.setState({ title })
  }

  handleBody() {
    let body = event.target.value;
    this.setState({ body });
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo-title">Title</label>
          <input
            onChange={this.handleTitle}
            type="text"
            id="todo-title"
            value={this.state.title}
          />
          <label htmlFor="todo-body">Body</label>
          <input
            onChange={this.handleBody}
            type="text"
            id="todo-title"
            value={this.state.body}
          />

          <label htmlFor="todo-done">Done</label>
          <input
            onSelect={this.handleSelect}
            name="todo[done]"
            type="radio"
            id="todo-done"
            value={true}
          />

          <label htmlFor="todo-done">Incomplete</label>
          <input
            onSelect={this.handleSelect}
            name="todo[done]"
            type="radio"
            id="todo-done"
            value={false}
          />

          <input type="submit" />
        </form>
      </>
    );
  }

}

export default TodoForm;