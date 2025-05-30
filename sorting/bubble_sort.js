const bubbleArray = [2, 1, 5, 41, 41, 10, 26, 65]

//Bubble Sort repeatedly steps through the list, compares adjacent elements,
//and swaps them if they are in the wrong order.

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}

console.log(BubbleSort(bubbleArray))
