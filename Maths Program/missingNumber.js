let arr = [10, 11, 13, 14, 15, 17]

let missingArray = []
let isFlag = false
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] === arr[i] + 1) {
    isFlag = false
  } else {
    isFlag = true
  }
  if (isFlag) {
    missingArray.push(arr[i] + 1)
  }
}

console.log(missingArray)
