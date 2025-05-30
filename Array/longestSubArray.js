const arr = [2, 2, 1, 5, 1]
const k = 5

//longest subArray with sum 5
let sum = 0
let maxlength = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]

  if (sum === k) {
    maxlength = i + 1
  }
}

console.log("maxlength", maxlength)

