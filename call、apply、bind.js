/**
 * 手写call
 * @param {this.Obj} context
 * @param  {...any} args
 */
Function.prototype.myCall = function (context, ...args) {
  //判断 context 是否传入，如果未传入则设置为window
  context = context || window;
  //将调用函数设为对象的属性
  context.fn = this;
  //调用函数
  let result = context.fn(...args);
  //将属性删除
  delete context.fn;
  return result;
};

// 测试myCall
var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.myCall(foo, 'kevin', 18);

/**
 * 手写apply
 * @param {this.Obj} context
 * @param {[arg1,arg2,...]} args
 */
Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  let result;
  if (args) {
    result = context.fn(args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

/**
 * 手写bind
 * @param  {...any} args
 */
Function.prototype.myBind = function (...args) {
  // 获取当前上下文this
  const context = args.shift();
  // 获取fn1.myBind(..)中的fn1
  const self = this;
  return function () {
    return self.apply(context, args);
  };
};

// 测试myBind
function fn1(a, b, c) {
  console.log('this', this);
  console.log(a, b, c);
  return 'this is fn1';
}

const fn2 = fn1.myBind({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);
