import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    this.props.formType === "signup"
      ? (this.state = { username: "", email: "", password: "" })
      : (this.state = { username: "", password: "" });
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.generateLoginForm = this.generateLoginForm.bind(this)
    this.generateSignupForm = this.generateSignupForm.bind(this)
    this.generateForm = this.generateForm.bind(this)
  }

  componentDidMount (){
    debugger
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  handleUsername(e) {
    let username = e.target.value
    this.setState({ username })
  }

  handleEmail(e) {
    let email = e.target.value
    this.setState({ email })
  }

  handlePassword(e) {
    let password = e.target.value
    this.setState({ password })
  }

  generateLoginForm() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            onChange={this.handleUsername}
            type="text"
            value={this.state.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={this.handlePassword}
            type="password"
            value={this.state.password}
          />
        </label>
        <input type="submit" />
      </form>
      </>
    );
  }

  generateSignupForm(){
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            onChange={this.handleUsername}
            type="text"
            value={this.state.username}
          />
        </label>
        <label>
          Email:
          <input
            onChange={this.handleEmail}
            type="text"
            value={this.state.email}
          />
        </label>
        <label>
          Password:
          <input
            onChange={this.handlePassword}
            type="password"
            value={this.state.password}
          />
        </label>
        <input type="submit" />
      </form>
      </>
    );
  }

  generateForm(){
    if (this.props.formType === "login") {
      return this.generateLoginForm();
    } else {
      return this.generateSignupForm();
    }
  }
  
  render(){
    let heading = undefined
    let linkPath = undefined
    let linkName = undefined

    if (this.props.formType === "login") {
      heading = <h1>Log In</h1>  
      linkPath = "/signup"
      linkName = "Sign Up"
    } else {
      heading = <h1>Sign Up</h1>
      linkPath = "/login";
      linkName = "Log In";
    }
    
    // let errors = this.state.errors
    // this.setState({ errors }) 
    let form = this.generateForm()

    return (
      <>
        <Link to={linkPath}>
          { linkName }
        </Link>
        { heading }
        { this.props.errors.session.join(", ") } 
        { form }
      </>
    )
  }
}

export default SessionForm;