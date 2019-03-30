const initialState = {};

const addUsers = users => {
  const state = {};
  users.forEach(user => {
    state[user.id + ''] = user;
  });

  return state;
};

const usersReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch(action.type) {
    case 'ADD_USERS':
      return addUsers(action.users);

    default:
      return state;
  }
};

export default usersReducer;