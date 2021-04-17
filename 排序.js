let arr = [5, 2, 6, 3, 1, 74, 5, 9, 2, 0, 2, 4, 6];

// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
//console.log(bubbleSort(arr));

// 插入排序
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      // 将其他元素往后移动
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }
  return arr;
}

// 快排
function quickSort(arr) {
  if (arr.length <= 1) return arr; //递归出口
  let right = [],
    left = [],
    key = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < key) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(key, quickSort(right));
}
console.log(quickSort(arr));
