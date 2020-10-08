import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut(){
    this.props.logout();
  }
  
  render () {
    return (this.props.currentUser) ? 
    (<> 
      <h1>
        Welcome to BenchBnB {this.props.currentUser.username}
      </h1>
      <button onClick={ this.handleSignOut }>Log Out</button>
    </>) : 
    (<>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Sign In</Link>
    </>)
  }
}

export default Greeting;