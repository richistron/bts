const isObjectEqual = (newValues, oldValues) => {
  let same = true;
  for(let key in newValues) {
    if (newValues[key] !== oldValues[key]) {
      same = false;
      break;
    }
  }
  return same;
};

export default isObjectEqual;