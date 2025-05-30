const arr = [1, 2, 3, 2, 4, 1]

// const duplicates = [...new Set(arr)]
// console.log("duplicates", duplicates)

const original = arr.reduce((acc, current) => {
  if (!acc[current]) {
    acc.push(current)
  }
  return acc
}, [])

console.log("original", original)
