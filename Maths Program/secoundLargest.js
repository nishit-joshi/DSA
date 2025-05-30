let arr = [1, 10, 5, 21, 35, 98, 98, 98]

//using selection sort - sort the array on ascending order

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

//comparing the element in reversal order - last to first

for (let k = arr.length - 2; k >= 0; k--) {
  let max

  if (arr[k] !== arr[arr.length - 1]) {
    max = arr[k]
    console.log("max", max)
    break
  }
}
