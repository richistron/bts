import superStorage from '../lib/superStorage';

const set = superStorage('ui', 'set');
const get = superStorage('ui', 'get');
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
