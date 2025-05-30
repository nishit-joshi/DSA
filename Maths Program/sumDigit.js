//using loop

let digit = 15478
let AllSum = 0
while (digit > 0) {
  let lastDigit = digit % 10
  AllSum = lastDigit + AllSum
  digit = Math.floor(digit / 10)
}
console.log("All==", AllSum)

//using recursion

let sum = 0
function recursionDigit(NewDigit) {
  if (NewDigit === 0) {
    return sum
  }
  let lastDigit = NewDigit % 10
  sum += lastDigit
  digit = NewDigit / 10

  return recursionDigit(Math.floor(NewDigit / 10))
}

console.log("recursion", recursionDigit(154))
