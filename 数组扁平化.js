function flatten(arr) {
  let res = []; // 定义扁平数组
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

let testArr = [1, 2, [3, 4, [5, 6]], 7];
console.log(flatten(testArr));
