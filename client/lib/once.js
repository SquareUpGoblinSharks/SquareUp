const onceCondition = (fn, condition) => {
  let called = false;
  return (...args) => {
    if (!called && condition){
      called = true;
      return fn(...args);
    }
  }
}

export default onceCondition;