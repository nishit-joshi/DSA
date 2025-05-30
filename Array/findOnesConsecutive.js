const arr = [2, 1, 5, 1, 5]

let temp = []
for (let i = 0; i < arr.length; i++) {
  let found = false
  for (let j = 0; j < temp.length; j++) {
    if (arr[i] === temp[j].value) {
      temp[j].count += 1
      found = true
      break
    }
  }
  if (!found) {
    temp.push({ value: arr[i], count: 1 })
  }
}

console.log("temp,temp", temp)

// const temp = []

// for (let i = 0; i < arr.length; i++) {
//   let found = false
//   for (let j = 0; j < temp.length; j++) {
//     if (arr[i] === temp[j]?.value) {
//       found = true
//       temp[j].count += 1
//       break
//     }
//   }
//   if (!found) {
//     temp.push({ value: arr[i], count: 1 })
//   }
// }

// console.log("temp", temp)

// for (let i = 0; i < arr.length; i++) {
//   let found = false
//   for (let j = 0; j < temp.length; j++) {
//     console.log("temp", temp[j]?.digit)
//     if (temp[j]?.digit === arr[i]) {
//       temp[j].count += 1
//       found = true
//       break
//     }
//   }
//   if (!found) {
//     console.log("her===")
//     temp.push({ digit: arr[i], count: 1 })
//   }
// }

// console.log("temp===", temp)
