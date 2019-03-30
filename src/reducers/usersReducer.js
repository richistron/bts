import USERS from '../lib/USERS';


const addUsers = users => {
  const state = {};
  users.forEach(user => {
    state[user.id + ''] = user;
  });

  return state;
};

const initialState = addUsers(USERS);

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