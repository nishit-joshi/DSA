const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function reverseArray(array) {
//   if (array.length <= 0) {
//     return array
//   }
//   return reverseArray(array.slice(1)).concat(array[0])
// }

// console.log(reverseArray(array))

function reverseArray(array) {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
  return array
}

const newA = reverseArray(array)

console.log(newA)
