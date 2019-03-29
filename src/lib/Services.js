import UserService from './UserService';

const Services = (options = {}) => {
  switch (options.resource) {
    case 'users':
      return UserService(options);

    default:
      throw new Error('resource not found');
  }
};

export default Services;