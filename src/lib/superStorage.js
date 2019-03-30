const superStorage = (resourse, method) => {
  switch (method) {
    case 'set':
      return (obj) => {
        localStorage.setItem(resourse, JSON.stringify(obj));
        return obj;
      };

    case 'get':
      return () => {
        return localStorage.getItem(resourse) ? JSON.parse(localStorage.getItem(resourse)) : null;
      };

    default:
      throw new Error('invalid method');
  }
};

export default superStorage;