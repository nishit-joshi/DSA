const arr = [4, 5, 6, 7, 8, 9]

function ReverseArray(arr) {
  if (arr.length === 0) return []
  const lastElement = arr.pop()
  const reversedArray = ReverseArray(arr)
  reversedArray.unshift(lastElement)

  return reversedArray
}

const NewData = ReverseArray(arr)

console.log(":NewData", NewData)
