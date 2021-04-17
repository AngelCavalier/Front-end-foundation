// 找出字符串中第一个不重复的字符，如“12345123”，则第一个不重复是4
/*function findDiff(str) {
  var num = str.split('');
  var chongfu = [];
  var flag = 0;
  for (var i = 0; i < num.length; i++) {
    for (var j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        flag = 1;
        chongfu.push(num[i]);
      }
    }
    if (flag === 0 && !chongfu.includes(num[i])) {
      console.log(num[i]);
      return;
    }
    flag = 0;
  }
}*/

function findDiff(s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      console.log(s[i]);
      break;
    }
  }
}

findDiff('1212334564');
