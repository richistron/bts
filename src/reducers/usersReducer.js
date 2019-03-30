import USERS from '../lib/USERS';
import superStorage from '../lib/superStorage';


const addUsers = users => {
  const state = {};
  users.forEach(user => {
    state[user.id] = user;
  });

  return state;
};

const updateUser = (state, user) => {
  state[user.id] = user;
  return state;
};

const {get, set} = superStorage('users');
const initialState =  get() ? get() : set(addUsers(USERS));

const usersReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch(action.type) {
    case 'ADD_USERS':
      return set(addUsers(action.users));

    case 'UPDATE_USER':
      return set(updateUser(state, action.user));

    default:
      return state;
  }
};

export default usersReducer;