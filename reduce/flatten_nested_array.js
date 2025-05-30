const nestedArray = [5, 8, [1, 2], 10, [3, 4], [5], { a: 15, b: 69, c: 87 }]

const flattenArray = nestedArray.reduce((acc, current, index, array) => {
  if (Array.isArray(current)) {
    acc.push(...current)
  } else {
    if (typeof current === "object") {
      acc.push(...Object.values(current))
    } else {
      acc.push(current)
    }
  }
  return acc
}, [])

console.log("flattenArray", flattenArray)
