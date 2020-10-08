import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS 
} from '../actions/session_actions';

const defaultState = {
  id: null
}

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  // let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // newState.id = action.user.id
      // return newState
      let id = action.user.id
      return Object.assign({}, { id })
    case LOGOUT_CURRENT_USER:
      return defaultState
    default:
      return state
  }
}

export default sessionReducer;