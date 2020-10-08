import { connect } from 'react-redux'
import Greeting from './greeting'
import { logout } from '../actions/session_actions'

const mapStateToProps = ({ session: { id }, entities: {users} }) => {
  // let currId = state.session.id;
  return ({
    currentUser: users[id],
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => {
      return dispatch(logout())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)