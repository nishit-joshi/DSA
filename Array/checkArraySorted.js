const arr = [1, 2, 3]

let sorted = false
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    sorted = true
  } else {
    sorted = false
  }
}

console.log("sorted", sorted)
