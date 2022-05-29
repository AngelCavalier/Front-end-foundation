const instanceOf = (A, B) => {
  if (typeof A !== 'object' || B == null) return false
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

console.log(instanceOf(1, Number));
console.log(instanceOf([], Array));
console.log(1 instanceof Number);
console.log([] instanceof Array);