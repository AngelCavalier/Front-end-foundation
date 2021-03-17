// 防抖
function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

// 节流
function throttle(fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

const input1 = document.getElementById('input1');
const div1 = document.getElementById('div1');

input1.addEventListener(
  'keyup',
  debounce(function (e) {
    console.log(e.target);
    console.log(input1.value);
  }, 1000)
);

div1.addEventListener(
  'drag',
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
  })
);
