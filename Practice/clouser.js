function multiply(value) {
  return function (secondValue = 1) {
    return value * secondValue
  }
}

const result = multiply(5)

console.log("data==", result())
