const img1 = document.getElementById('img1');
img1.onload = function () {
  console.log('img loaded');
};

// 页面的全部资源加载完才会执行，包括图片、视频等
window.addEventListener('load', function () {
  console.log('window loaded');
});
// DOM渲染完即可执行，此时图片、视频还可能没有加载完
document.addEventListener('DOMContentLoaded', function () {
  console.log('window DOMContentLoaded');
});
