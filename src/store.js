import { createStore, combineReducers } from 'redux';
import { reducer as pageReducer } from './page/index';

const reducer = combineReducers({ ...pageReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
