const arr = [1, 2, 4, 3, 8, 5, 6, 7, 9, 10]

let secondSmallest = Infinity



let smallest = arr[0]
// let largest = arr[0]
// let secondLargest = -Infinity

for (let i = 0; i < arr.length; i++) {
  // if (arr[i] > largest) {
  //   secondLargest = largest
  //   largest = arr[i]
  // } else if (arr[i] > secondLargest && arr[i] !== largest) {
  //   secondLargest = arr[i]
  // }

  if (arr[i] < smallest) {
    secondSmallest = smallest
    smallest = arr[i]
  } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
    secondSmallest = arr[i]
  }
}

console.log("smallest", smallest)
console.log("largest", largest)
console.log("secondLargest", secondLargest)
console.log("secondSmallest", secondSmallest)
