import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

// const defaultErrorState = {
//   session: []
// }

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let errors = action.errors
      return Object.assign({}, { errors });
    case RECEIVE_CURRENT_USER:
      let errors = []
      return Object.assign({}, { errors });
    default:
      return state;
  }
}

export default sessionErrorsReducer;