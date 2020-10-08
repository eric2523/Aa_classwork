import {connect} from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: "login",
    ownProps
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (formUser) => {
      return dispatch(login(formUser))
    }
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SessionForm)