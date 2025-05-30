let arr = [
  10, 20, 10, 11, 41, 54, 84, 89, 98, 85, 65, 25, 35, 54, 41, 12, 21, 22, 5, 4,
  1,
]

for (let i = 0; i < arr.length; i++) {
  let min = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j
    }
  }
  if (min !== i) {
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
}

console.log(arr)
