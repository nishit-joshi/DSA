const arr = [1, 0, 0, 2, 5, 0, 0, 6, 4, 8, 0, 1]

let temp = []
let NoZero = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    temp.push(arr[i])
  } else {
    NoZero.push(arr[i])
  }
}

const enOFZeros = NoZero.concat(temp)
console.log("enOFZeros", enOFZeros)

// const temp = []
// const newArr = []

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     temp.push(arr[i])
//   } else {
//     newArr.push(arr[i])
//   }
// }

// const moveZerosToEnd = newArr.concat(temp)

// console.log("moveZerosToEnd", moveZerosToEnd)
