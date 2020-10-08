import {connect} from 'react-redux'
import SessionForm from './session_form'
import { login, clearErrors } from '../../actions/session_actions'

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
    },
    clearErrors: () => {
      return dispatch(clearErrors())
    }
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SessionForm)