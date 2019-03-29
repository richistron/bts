import usersReducer from './usersReducer';
import sessionReducer from './sessionReducer';
import {fromJS} from 'immutable';

const reducer = (state, action) => {
  return fromJS({
    users: usersReducer(state, action),
    session: sessionReducer(state, action),
  });
};

export const INITIAL_STATE = reducer();

export default reducer;
