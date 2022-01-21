let arr = [1, 2, 3];

// ES6
console.log(Array.isArray(arr));
// 通过原型判断
console.log(arr instanceof Array);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.constructor == Array);
console.log(Array.prototype.isPrototypeOf(arr));
// 通过object类型的 [[class]] 属性判断的，其中函数的class是Function，结果是[object Function]， 普通的对象是Object，结果是[object Object]
console.log(Object.prototype.toString.call(arr) === '[object Array]');