var urlArray = ['weibo', 'huya', 'douyu', 'dog99', 'bilibili'];
var url = location.hostname;
console.log(url);

(function test() {
  for (var i = 0, len = urlArray.length; i < len; i++) {
    if (url.indexOf(urlArray[i]) !== -1) {
      alert('好好学习，两秒后关闭本页面！！！');
      sleep(2000).then(() => {
        Close();
      });
    }
  }
})();

function Close() {
  window.opener = null;
  window.open('', '_self');
  window.close();
}

function sleep(time) {
  var p = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return p;
}
