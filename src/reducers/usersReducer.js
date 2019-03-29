
const addUsers = users => {
  const state = {};
  users.forEach(user => {
    state[user.id + ''] = user;
  });

  return state;
};

const usersReducer = (state, action) => {
  if (!state) {
    return {};
  }

  switch(action.type) {
    case 'ADD_USERS':
      return addUsers(action.users);

    default:
      return {};
  }
};

export default usersReducer;