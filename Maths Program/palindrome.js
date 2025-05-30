let digit = 121
let duplicateDigit = digit

let array = []
while (digit > 0) {
  let lastDigit = digit % 10
  array.push(lastDigit)
  digit = Math.floor(digit / 10)
}

console.log(
  "Compare==",
  duplicateDigit.toString() === array.join("").toString()
)
