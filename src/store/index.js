import {
  createStore,
  // applyMiddleware,
  compose
} from 'redux';
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
// );
const store = createStore(reducer, composeEnhancers());

export default store;