// 1.长度8-20 2.必须包含数字大小写字母
const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;

console.log(reg.test('123asdASD'));
