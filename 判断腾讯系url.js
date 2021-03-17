let url0 = 'https://tencent.com';
let url1 = 'https://cloud.tencent.com';
let url2 = 'https://meeting.tencent.com';
let url3 = 'https://v.qq.com';
let url4 = 'https://im.qq.com';
let url5 = 'https://sports.qq.com';
let url6 = 'https://news.qq.com';
let url7 = 'https://cf.gamebbs.qq.com';
let url8 = 'https://12.3.6543g.tech.qq.com';
function testUrl(url) {
  const reg_tencent = /^(http|https):\/\/[\w.]+(qq|tencent).com$/;
  return reg_tencent.test(url);
}
console.log(testUrl(url0));
console.log(testUrl(url1));
console.log(testUrl(url2));
console.log(testUrl(url3));
console.log(testUrl(url4));
console.log(testUrl(url5));
console.log(testUrl(url6));
console.log(testUrl(url7));
console.log(testUrl(url8));
