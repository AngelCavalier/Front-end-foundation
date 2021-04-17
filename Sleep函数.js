// Promise
function sleep(time) {
  var p = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return p;
}
sleep(1000).then(() => {
  console.log('1000毫秒之后了');
});

// async
async function sleep(time, func) {
  await new Promise((resolve) => setTimeout(resolve, time));
  return func();
}
sleep(1000, () => {
  console.log('1000毫秒之后了');
});
