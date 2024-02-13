let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){
    let val = arr[i];
    if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
}