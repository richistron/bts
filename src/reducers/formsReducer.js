
const initialState = {};

const formsReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'FORM_CHANGE': {
      const newState = {};
      newState[action.field] = action.value;
      return {
        ...state,
        ...newState,
      };
    }
    default:
      return state;
  }
};

export default formsReducer;
