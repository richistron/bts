import superStorage from '../lib/superStorage';

const {get, set} = superStorage('ui');
const initialState = get() || {};

const uiReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'TOGGLE_TABLE_VIEW': {
      return set({
        ...state,
        tableViewOn: action.val
      });
    }

    default:
      return state;
  }
};

export default uiReducer;
