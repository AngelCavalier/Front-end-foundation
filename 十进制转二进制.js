// 十进制数字转换为二进制字符串
function toBinary(num) {
  var str = [];
  while (num > 0) {
    str.unshift(num % 2);
    num = parseInt(num / 2);
  }
  var res = str.join('');
  console.log(res);
}

toBinary(2);
