const url1 = 'https://img2.mukewang.com/601e51b80001daf007000700-100-100.jpg';
const url2 =
  'https://img3.sycdn.imooc.com/601e51b80001daf007000700-140-140.jpg';

function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`图片加载失败 ${url}`));
    };
    img.src = url;
  });
}

loadImg(url1)
  .then((img1) => {
    console.log(img1.width);
    return img1; //普通对象
  })
  .then((img1) => {
    console.log(img1.height);
    return loadImg(url2); //Promise实例
  })
  .then((img2) => {
    console.log(img2.width);
    return img2;
  })
  .then((img2) => {
    console.log(img2.height);
  })
  .catch((error) => console.error(error));
