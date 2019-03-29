import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';


const reducers = combineReducers({
  foo: () => fromJS({foo: true}),
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

