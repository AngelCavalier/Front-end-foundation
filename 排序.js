let arrTest = [5, 2, 6, 3, 1, 74, 5, 9, 2, 0, 2, 4, 6];

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

// 快排
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let right = [],
    left = [],
    keys = arr.shift();
  for (let value of arr) {
    if (value > keys) {
      right.push(value);
    } else {
      left.push(value);
    }
  }
  return quickSort(left).concat(keys, quickSort(right));
}
