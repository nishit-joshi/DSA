const array = [1, 2, 3, 4, 5, 6, 5, 2, 3]

const duplicate = [...new Set(array)]

console.log("duplicate", duplicate)

const getData = [
  ...new Set(array.filter((item, index) => array.indexOf(item) !== index)),
]

console.log("getData==", getData)

// using for loop
let result = []
let duplicates = []

for (let i = 0; i < array.length; i++) {
  if (!result.includes(array[i])) {
    result.push(array[i])
  } else {
    duplicates.push(array[i])
  }
}

console.log("result", result)
console.log("duplicate", duplicates)
