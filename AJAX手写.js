const { log } = require('console');

function ajax(url) {
  const p = new Promise((reslove, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          reslove(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error('404 Not Fund!'));
        }
      }
    };
    xhr.send(null);
  });

  return p;
}

const url = '';
ajax(url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
