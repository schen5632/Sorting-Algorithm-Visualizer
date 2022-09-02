export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  let minIndex = 0;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
      animations.push([-1, minIndex, j]);
      animations.push([-2, minIndex, j]);
    }

    animations.push([-1, minIndex, i]);
    animations.push([-2, minIndex, i]);
    animations.push([-3, minIndex, array[i]]);
    animations.push([-3, i, array[minIndex]]);
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
}
