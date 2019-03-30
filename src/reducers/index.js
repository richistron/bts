import usersReducer from './usersReducer';
import formsReducer from './formsReducer';
import uiReducer from './uiReducer';

const reducer = (state = {}, action) => {
  return {
    users: usersReducer(state.users || null, action),
    forms: formsReducer(state.forms || null, action),
    ui: uiReducer(state.ui || null, action),
  };
};

export const INITIAL_STATE = reducer();

export default reducer;
