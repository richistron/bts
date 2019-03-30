const initialState = {
};

const uiReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'TOGGLE_TABLE_VIEW': {
      return {
        ...state,
        tableViewOn: action.val
      };
    }

    default:
      return state;
  }
};

export default uiReducer;
