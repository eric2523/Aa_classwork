import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  })
}

const logoutCurentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
}

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
}

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
  })
}

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then((user) => dispatch(receiveCurrentUser(user)))
      .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
  }
}

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout()
      .then(() => dispatch(logoutCurentUser()))
      .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
  }
}

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then((user) => dispatch(receiveCurrentUser(user)))
      .fail((errors) => {
        return dispatch(receiveErrors(errors.responseJSON))
      })
  }
}

