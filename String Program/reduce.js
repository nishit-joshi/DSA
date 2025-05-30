const arr = [1, 2, 3]

const sum = arr.reduce((acc, current) => acc + current)
console.log("sum", sum)

const arr1 = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9],
]

const flattenArray = arr1.reduce((acc, current) => acc.concat(current))
console.log("flattenArray", flattenArray)

const words = ["apple", "banana", "apple", "orange", "banana", "banana"]

const occurance = words.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1
  } else {
    acc[current] = 1
  }
  return acc
}, {})

console.log("occurence", occurance)

const numbers = [10, 20, 30, 40, 50]

const largest = numbers.reduce((acc, current) => Math.max(acc, current))
console.log("largest", largest)


