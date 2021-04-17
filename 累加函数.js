function sum() {
  let args = [...arguments];
  let add = function () {
    args.push(...arguments);
    return add;
  };
  add.valueOf = function () {
    let res = args.reduce((a, b) => a + b);
    console.log(res);
  };
  return add;
}

sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
sum(1)(2)(3)(4).valueOf(); //10
sum(2)(4, 1)(2).valueOf(); //9
