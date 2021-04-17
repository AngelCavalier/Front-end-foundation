function parseUrl(url) {
  let arr = url.split('?');
  let params = arr[1].split('&');
  let obj = {};
  for (let i = 0; i < params.length; i++) {
    let arr_params = params[i].split('=');
    obj[arr_params[0]] = arr_params[1];
  }
  return obj;
}
console.log(parseUrl('http://www.baidu.com?key0=0&key1=1&key2=2'));
