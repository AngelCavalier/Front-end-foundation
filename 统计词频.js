var str = 'Current status try Tencent conference interview for the first time';
var arr = str.split(' ');
var map = {};

for (let i = 0; i < arr.length; i++) {
  if (!map[arr[i]]) {
    map[arr[i]] = 1;
  } else {
    map[arr[i]]++;
  }
}
for (let key in map) {
  console.log(key, map[key]);
}
