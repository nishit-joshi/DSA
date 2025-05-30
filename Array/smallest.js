const arr = [2, 5, 6, 10, 12]

let smallest = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i]
  }
}

console.log("smallest", smallest)
