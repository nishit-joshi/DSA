const selectionArray = [10, 5, 25, 45, 21, 12]
const k = 4

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (j = i + 1; j < array.length; j++) {
      //finding  min in array
      if (array[j] < array[i]) {
        min = j
      }

      //swaping with the min in array with the i
      if (min !== i) {
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
      }
    }
  }
  return array
}

console.log(selectionSort(selectionArray))
