let array = [1, 2, 2, 1, 5, 3, 4, 5, 6, 6, 7, 8, 9]
let withOutDuplicate = []

// for (let i = 0; i < arr.length; i++) {
//   if (!duplicatedArray.includes(arr[i])) {
//     duplicatedArray.push(arr[i])
//   }
// }

for (let i = 0; i < array.length; i++) {
  let found = false
  for (j = 0; j < withOutDuplicate.length; j++) {
    if (array[i] === withOutDuplicate[j]) {
      found = true
    }
  }
  if (!found) {
    withOutDuplicate.push(array[i])
  }
}

console.log("withOutDuplicate", withOutDuplicate.sort())
