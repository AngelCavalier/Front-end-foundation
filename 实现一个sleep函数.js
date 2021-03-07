// Promise
function sleep(time) {
  var temple = new Promise((resolve) => {
    console.log(111);
    setTimeout(resolve, time);
  });
  return temple;
}
sleep(1000).then(() => {
  console.log(222);
});

// async
async function sleep(time, func) {
  await new Promise((resolve) => setTimeout(resolve, time));
  return func();
}
sleep(1000, () => {
  console.log(111);
});
