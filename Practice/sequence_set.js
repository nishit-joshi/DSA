const arr = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
]

let result = []
for (let i = 0; i < arr.length; i++) {
  console.log("arr[i] + 1", arr[i] + 1)
  console.log("arr[i + 1]", arr[i + 1])

  if (arr[i] + 1 === arr[i + 1]) {
    result.push(arr[i], arr[i + 1])
  }
}

console.log("result==", result)

let updatedStr = ""
for (let j = 0; j < result.length; j++) {
  if (result[j] + 1 === result[j + 1]) {
    if (result[j - 1] === result[j]) {
      updatedStr.concat(`${result[j - 1]} - ${result[j]}`)
    } else {
      updatedStr.concat(`${result[j]} - ${result[j + 1]}`)
    }
  } else if (result[j] !== result[j + 1]) {
    updatedStr.concat(`${result[j]}`)
  }
}

console.log("updatedStr", updatedStr)
