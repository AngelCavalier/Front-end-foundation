function foo(str) {
  if (str.indexOf('_') === -1) return str;
  let strs = str.split('_');
  for (let i = 1; i < strs.length; i++) {
    strs[i] = strs[i].replace(strs[i][0], strs[i][0].toUpperCase());
  }
  return strs.toString().replace(/,/g, '');
}
console.log(foo('aa_bb_cc'));
