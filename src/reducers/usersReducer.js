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

const removeUser = (state, id) => {
  const newState = {};
  for (let key in state) {
    if (state[key].id !== id) {
      newState[key] = state[key];
    }
  }
  return newState;
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

    case 'REMOVE_USER':
      return set(removeUser(state, action.id));

    default:
      return state;
  }
};

export default usersReducer;