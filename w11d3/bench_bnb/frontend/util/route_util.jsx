import {Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react'

const Auth = ({ path, loggedIn, exact, component: Component}) => {
  return (<Route 
    path={ path }
    exact={ exact }
    render={ (props) => {
      return (loggedIn) ? <Redirect to="/" /> : <Component {...props} />
    }}
  />
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(
  connect(
    mapStateToProps, 
    null)
    (Auth)
);

