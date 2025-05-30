Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error("not a Function")
  }

  const result = []

  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}

const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4]
