import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from 'redux-form';

import loaderReducer from './reducer/loader';
import authReducer from './reducer/auth';

import authSaga from './saga/auth';

const reducerList = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  form: formReducer,
});

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)(createStore);

let store = null;

const makeStore = (initialState, options) => {
  // const store = createStore(
  //   reducerList,
  //   applyMiddleware(sagaMiddleware),
  // );
  //
  // sagaMiddleware.run(authSaga);
  store = createStoreWithMiddleware(reducerList, initialState);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(authSaga);
  };

  store.runSagaTask();

  return store;
};

export { store };

export default makeStore;
