export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let n = array.length - 1;
  quickSort(array, 0, n);
  return array;
}

function quickSort(array, low, high) {
  if (low < high) {
    let pi = partition(array, low, high);
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
}

function partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
