const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const k = 2

const newArr = []

for (let i = 0; i < arr.length - 2; i++) {
  newArr.push(arr[i])
}
newArr.unshift(arr[arr.length - 1])
newArr.unshift(arr[arr.length - 2])

console.log("newArr", newArr)
