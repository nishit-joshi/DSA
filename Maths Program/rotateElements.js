let arr = [1, 2, 3, 10, 11, 12]
let k = 3

let tempArray = []

for (let i = arr.length - k; i < arr.length; i++) {
  tempArray.push(arr[i])
}

for (let j = 0; j <= 2; j++) {
  tempArray.push(arr[j])
}

console.log(tempArray)
