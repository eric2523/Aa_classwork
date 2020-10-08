import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from './components/root'

// window testing imports 
// import * as APIUtil from './util/session_api_util'
// import {signup, login} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore()
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store }/>, root);

  //window testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = signup
  // window.login = login
  // window.logout = APIUtil.logout
});
