const arr = [1, 1, 2, 5, 1, 1, 1, 15, 4, 1, 5]

let max = 0
let stored = 0

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === 1) {
    max++
    stored = Math.max(stored, max)
  } else {
    max = 0
  }
}

console.log("stored===", stored)

// let max = 0
// let stored = 0

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] === 1) {
//     max++
//     stored = Math.max(stored, max) // ✅ Only update stored if max is greater
//   } else {
//     max = 0
//   }
// }

console.log("Maximum consecutive 1s:", stored)
