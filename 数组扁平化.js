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

/**
 * 请完成ECMAScript 2019中新增Array flat方法的polyfill版本实现
 * ECMAScript 2019 新增的 Array 的 flat 方法，该方法将一个多维数组扁平化为一维，请你写一个 polyfill 实现该提案。示例代码如下：
 * 多维数组扁平化
 * @param depth {Number} 嵌套数组的深度，默认值为1
 **/
// 示例
const arr1 = [1, [2, 3]];
console.log(arr1.flat());
// [1, 2, 3]
const arr2 = [1, [2, 3, [4]]];
console.log(arr2.flat());
// [1, 2, 3, [4]];
const arr3 = [1, [2, 3, [4]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4];
const arr4 = [1, , [3, 4]];
console.log(arr4.flat());
// [1, 3, 4]
Array.prototype.flat = function flat(depth) {
  // todo
  // your code here
  if (depth == null) {
    //嵌套数组的深度，默认值为1
    depth = 1;
  }

  let arr = []; //保存结果

  this.forEach((item) => {
    if (Array.isArray(item) && depth > 1) {
      arr = arr.concat(item.flat(depth - 1));
    } else {
      arr = arr.concat(item);
    }
  });
  return arr;
};
