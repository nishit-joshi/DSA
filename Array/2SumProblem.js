const arr = [2, 3, 4, 5, 8, 9, 10, 11, 14, 2, 20, 41]
const k = 43
let start = 0




for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === k) {
      console.log("start", arr[i], arr[j])
    }
  }
}
