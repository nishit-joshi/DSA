const arr = [64, 25, 12, 22, 11]
//Output: [11, 12, 22, 25, 64]

//first find the min index
//compare with each element and find the lowest
//swap with the first
//do in each iteration

for (let i = 0; i < arr.length; i++) {
  let minIndex = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      minIndex = j
    }
  }
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

console.log("arr", arr)
