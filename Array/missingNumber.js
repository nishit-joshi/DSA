const arr = [1, 2, 4, 5]

let missingNumber = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] + 1 !== arr[i + 1]) {
    missingNumber = arr[i] + 1
    break
  }
}

console.log("missingNumber==", missingNumber)

// let missingNumber = 0
// for (let i = 0;i < arr.length - 1;i++) {
//     1 + 1  !== 2
//   if (arr[i] + 1 !== arr[i + 1]) {
//     missingNumber = arr[i] + 1
//     break
//   }
// }

// console.log("missin==", missingNumber)
