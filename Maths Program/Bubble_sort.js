let arr = [
  10, 20, 10, 11, 41, 54, 84, 89, 98, 85, 65, 25, 35, 54, 41, 12, 21, 22,
]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr)

//Selection Sort

for (let i = 0; i < arr.length; i++) {
  let min = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j
    }
  }
  ;[arr[i], arr[min]] = [arr[min], arr[i]]
}

// console.log("aerr", arr)

//Bubble sort

//move larges to the last

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
    }
  }
}

console.log("arrrrr", arr)
