let a = 123456

const reverseArray = []

while (a > 0) {
  reminder = a % 10

  reverseArray.push(reminder)

  a = Math.floor(a / 10)
}

console.log("reverseArray", reverseArray.join(""))
