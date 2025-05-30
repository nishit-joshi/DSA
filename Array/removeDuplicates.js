const arr = [1, 10, 20, 5, 6, 10, 50, 20, 6, 7, 8]

const newArr = []

for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i])
  }
}

console.log(newArr)

// console.log([...new Set(arr)])
