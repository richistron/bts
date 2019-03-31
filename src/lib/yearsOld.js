const yearsOld = (date = '') => {
  const now =  Date.now();
  const then = new Date(date).getTime();
  const diff = now - then;
  return Math.floor(diff / 31536000000);
};

export default yearsOld;