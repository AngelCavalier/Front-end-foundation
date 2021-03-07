function add(a, b) {
  let lenA = a.length,
    lenB = b.length,
    len = lenA > lenB ? lenA : lenB;
  // 填充0补齐位数一致
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      b = '0' + b;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      a = '0' + a;
    }
  }
  //将字符串分割为字符，并倒序，用于竖式计算
  let arrA = a.split('').reverse(),
    arrB = b.split('').reverse(),
    ans = [],
    carryAdd = 0; //是否进位
  for (let i = 0; i < len; i++) {
    let temp = Number(arrA[i]) + Number(arrB[i]) + carryAdd;
    ans[i] = temp > 9 ? temp - 10 : temp; //判断是否进位
    carryAdd = temp > 9 ? 1 : 0;
  }
  //如果加到最后一位有进位
  if (carryAdd === 1) {
    ans[len] = 1;
  }
  return ans.reverse().join('');
}
