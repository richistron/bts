const superStorage = (resource) => {
  return {
    set: (obj) => {
      localStorage.setItem(resource, JSON.stringify(obj));
      return obj;
    },

    get: () => {
      return localStorage.getItem(resource) ? JSON.parse(localStorage.getItem(resource)) : null;
    },
  };
};

export default superStorage;