const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', 'c'],
  foo: function () {
    console.log('foo function');
  }
};

const obj2 = deepClone(obj1);
obj2.address.city = 'shanghai';
obj2.arr[0] = 'a1';
console.log(obj2);
console.log(obj1.address.city);
console.log(obj1.arr[0]);

/**
 * 深拷贝
 * @param {Object} obj
 */
function deepClone(obj) {
  // 判断如果是函数类型，直接使用原函数
  if (typeof obj === 'function') return obj;
  // 判断如果是非对象类型，直接返回
  if (typeof obj !== 'object' || typeof obj == null) return obj;
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]); //递归调用
    }
  }
  return result;
}

const obj3 = shallowCopy(obj1);
obj3.address.city = 'shanghai';
obj3.arr[0] = 'a1';
console.log(obj1.address.city);
console.log(obj1.arr[0]);

/**
 * 浅拷贝
 * @param {Object} obj
 */
function shallowCopy(obj) {
  if (typeof obj !== 'object' || typeof obj == null) return obj;
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
