let arr = [1, 2, 3, 4, 5, 6]

let tempArray = []

for (let i = 1; i < arr.length; i++) {
  tempArray.push(arr[i])
}
tempArray.push(arr[0])

console.log(tempArray)
