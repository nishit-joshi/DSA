const selectionArray = [10, 5, 25, 45, 21, 12]
const k = 4

function sortDescendingArray(array) {
  for (let i = 0; i < array.length; i++) {
    let max = i
    for (j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        max = j
      }

      if (max !== i) {
        temp = array[i]
        array[i] = array[max]
        array[max] = temp
      }
    }
  }
  return array[k - 1]
}

console.log(sortDescendingArray(selectionArray))
