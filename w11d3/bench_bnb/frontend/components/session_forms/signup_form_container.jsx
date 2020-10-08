import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    errors: state.errors,
    formType: "signup",
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (formUser) => {
      return dispatch(signup(formUser));
    },
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SessionForm);