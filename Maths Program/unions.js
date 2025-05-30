let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [4, 5, 6, 7, 8, 9]

let tempArray = []

// const uniqueArray = Array.from(new Set([...arr1, ...arr2]))

// console.log(uniqueArray)

for (let i = 0; i < arr1.length; i++) {
  tempArray.push(arr1[i])
}
for (let j = 0; j < arr2.length; j++) {
  let isPresent = false
  for (let k = 0; k < tempArray.length; k++) {
    if (tempArray[k] === arr2[j]) {
      isPresent = true
      break
    }
  }
  if (!isPresent) {
    tempArray.push(arr2[j])
  }
}

console.log(tempArray)
