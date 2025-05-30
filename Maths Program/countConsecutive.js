let arr = [0, 1, 1, 0, 2, 2, 3, 1, 3, 3, 2, 0]

let isSame = false
let storedValues = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    isSame = true
    storedValues.push(arr[i])
  }
}

console.log(storedValues)
