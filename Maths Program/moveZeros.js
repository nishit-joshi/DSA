let arr = [1, 2, 0, 0, 3, 4, 5, 2, 0, 6]

let tempArray = []

let count = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    tempArray.push(arr[i])
  } else {
    count++
  }
}

for (let j = 1; j <= count; j++) {
  tempArray.push(0)
}

console.log(tempArray)
