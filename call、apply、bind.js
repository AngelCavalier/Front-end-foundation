/**
 * 手写call
 * @param {this.Obj} thisArg
 * @param  {...any} args
 */
Function.prototype.myCall = function (thisArg, ...args) {
  //判断 thisArg 是否传入，如果未传入则设置为window
  thisArg = thisArg || window;
  //通过隐式绑定原则知，this即所要调用的函数，将其设为绑定对象的属性
  thisArg.fn = this;
  //调用函数
  let result = thisArg.fn(...args);
  //将属性删除
  delete thisArg.fn;
  return result;
};

// 测试myCall
function bar(name, age) {
  console.log('bar被调用', this, name, age);
  return name + age + '岁'
}
let resCall = bar.myCall({ value: 1 }, 'kevin', 18);
console.log(resCall);

/**
 * 手写apply
 * @param {this.Obj} thisArg
 * @param {[arg1,arg2,...]} argArray
 */
Function.prototype.myApply = function (thisArg, argArray) {
  thisArg = thisArg || window;
  thisArg.fn = this;
  let result;
  if (argArray) {
    result = thisArg.fn(...argArray);
  } else {
    result = thisArg.fn();
  }
  delete thisArg.fn;
  return result;
};

// 测试myApply
function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2);
  return num1 + num2
}
const resApply = sum.myApply({ num: 1 }, [10, 20]);
console.log(resApply);


/**
 * 手写bind
 * @param {this.Obj} thisArg
 * @param {...any} argArray
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  // 1. 获取到真实需要调用的函数
  let fn = this
  // 2.绑定this
  thisArg = thisArg || window
  function proxyFn(...args) {
    // 3.将函数放到thisArg中进行调用
    thisArg.fn = fn
    let result = thisArg.fn(...argArray, ...args)
    delete thisArg.fn
    // 4.返回结果
    return result
  }
  return proxyFn
};

// 测试myBind
function foo() {
  console.log('foo函数被执行', this);
  return 20
}
function num(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}
const newFoo = foo.myBind({ value: 100 });
const res = newFoo();
console.log(res);

const newNum = num.myBind({ value: 100 }, 10, 20, 30, 40)
const resBind = newNum()