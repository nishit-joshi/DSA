const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

let oddIndexs = []
let oddValues = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddIndexs.push(i)
    oddValues.push(arr[i])
  }
  if (oddIndexs?.length) {
    console.log("oddIndexs", oddIndexs)
  }
}

console.log("before===", oddIndexs)

for (let j = 0; j < oddIndexs.length; j++) {
  if (arr[oddIndexs[j]] > arr[oddIndexs[j + 1]]) {
    ;[oddIndexs[j], oddIndexs[j + 1]] = [oddIndexs[j + 1], oddIndexs[j]]
  }
}

console.log("oddIndexs===", oddIndexs)

for (let m = 0; m < oddIndexs.length; m++) {
  arr[oddIndexs[m]] = oddValues[m]
}

console.log("arr", arr)
