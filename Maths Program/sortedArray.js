let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9]
let flag = true
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] <= arr[i + 1]) {
    flag = true
  } else {
    console.log(arr[i], arr[i + 1])
    flag = false
    break
  }
}

console.log(flag)
