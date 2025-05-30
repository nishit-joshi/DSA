//Sort array of objects by property using Selection Sort

// Input: [
//     { name: 'a', score: 45 },
//     { name: 'b', score: 12 },
//     { name: 'c', score: 78 }
//   ]

//   Output: Sorted by `score` ascending.

const arr = [
  { name: "a", score: 45 },
  { name: "b", score: 12 },
  { name: "c", score: 78 },
]

for (let i = 0; i < arr.length; i++) {
  let minIndex = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex].score > arr[j].score) {
      minIndex = j
    }
  }
  if (minIndex !== i) {
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

console.log("arr", arr)
