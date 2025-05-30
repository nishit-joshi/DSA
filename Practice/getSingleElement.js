const arr = [8, 1, 2, 8, 10, 2, 1]

const filtered = arr.reduce((acc, current, CurrentIndex, arr) => {
  const result = arr.filter((item, index) => index !== CurrentIndex)
  if (!result.includes(current)) {
    return current
  }
  return acc
}, 0)

console.log("result==", filtered)
