//Input:  [5, 1, 9, 3, 7]
//Output: [9, 7, 5, 3, 1]

const arr = [5, 1, 9, 3, 7]

for (let i = 0; i < arr.length; i++) {
  let maxIndex = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[maxIndex] < arr[j]) {
      maxIndex = j
    }
  }

  if (maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
  }
}

console.log("arr", arr)
