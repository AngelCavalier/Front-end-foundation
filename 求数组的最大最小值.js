var arr = [6, 4, 1, 8, 2, 11, 23];
// apply
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

// reduce
function max(prev, next) {
  return Math.max(prev, next);
}
function min(prev, next) {
  return Math.min(prev, next);
}
console.log(arr.reduce(max));

console.log(arr.reduce(min));
