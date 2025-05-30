const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"]

const count = fruits.reduce((acc, current, index, array) => {
  if (acc[current]) {
    acc[current] += 1
  } else {
    acc[current] = 1
  }
  return acc
}, {})

console.log("count", count)
