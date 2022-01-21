let obj1 = { a: 1, b: '2', c: [1, 2], d: { f: 6, e: 5 } };
let obj2 = { b: '2', c: [1, 2], d: { e: 5, f: 6 }, a: 1 }

// 判断是否为对象 且不为null
function isObj(obj) {
  return typeof obj === 'object' && typeof obj !== null
}

function isEqual(obj1, obj2) {
  // 判断如果传入的不是对象类型，返回两个值的比较
  if (!isObj(obj1) || !isObj(obj2)) {
    return obj1 === obj2
  }
  // 判断是否传入同一个对象
  if (obj1 === obj2) {
    return true
  }
  // 判断两个对象的键是否一致
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false
  }
  // 递归遍历所有的键值对是否相等
  for (const key in obj1) {
    // 判断当前的key是否是其本书的属性，而不是原型上的属性，for-in循环会将原型上所有的属性遍历一遍
    if (obj1.hasOwnProperty(key)) {
      // 递归调用
      let res = isEqual(obj1[key], obj2[key])
      if (!res) {
        return false
      }
    }
  }
  return true
}

console.log(isEqual(obj1, obj2));