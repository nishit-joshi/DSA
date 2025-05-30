const array = [2, 5, 6, 4, 10, 10, 2, 6, 6]

let largest = array[0]
let secondLargest = -1

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i]
  } else if (array[i] > secondLargest && array[i] !== largest) {
    secondLargest = array[i]
  }
}

console.log("secondLargest", secondLargest)
console.log("largest", largest)
