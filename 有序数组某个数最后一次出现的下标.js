//二分查找target的右边界right
var A = [1, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7];
function findIndex(arr, target) {
  let left = 0,
    right = arr.length - 1,
    mid;
  while (left <= right) {
    mid = (left + right) >> 1;
    // if (target === arr[mid]) return mid;
    if (target >= arr[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

console.log(findIndex(A, 4));
