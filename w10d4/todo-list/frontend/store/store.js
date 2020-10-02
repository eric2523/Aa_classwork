import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = (preLoadedState = {}) => {
  return createStore(rootReducer, preLoadedState)
}

export default configureStore;