function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

const myPromiseAll = (arr) => {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i].then((data) => {
          result[i] = data;
          if (result.length === arr.length) {
            resolve(result);
          }
        }, reject);
      } else {
        result[i] = arr[i];
      }
    }
  });
};

// 测试
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

myPromiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
