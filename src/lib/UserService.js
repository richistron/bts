import USERS from './USERS';

const UserService = ({method}) => {

  if (!method) {
    throw new Error('method not found');
  }

  if (method === 'get') {
    // TODO, using a file for while api is ready
    return new Promise(resolve => {
      resolve(USERS);
    });
  }

  if (method === 'post') {
    // TODO, implement local storage
  }
};

export default UserService;