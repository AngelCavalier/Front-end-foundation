// 防抖
function debounce(fn, delay = 500) {
  // 定义一个定时器，报错上一次的定时器
  let timer = null;
  // 真正执行的函数
  return function () {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, arguments);
    }, delay);
  };
}

// 节流
function throttle(fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const input = document.getElementById('input');
const div = document.getElementById('div');

input.addEventListener(
  'input',
  debounce(function (e) {
    console.log(e.target);
    console.log(input.value);
  }, 1000)
);

div.addEventListener(
  'drag',
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
  })
);
