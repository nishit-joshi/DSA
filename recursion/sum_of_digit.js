let number = 12345

function SumOfDigit(n) {
  if (n === 0) return 0
  let lastDigit = n % 10
  let newDigit = Math.floor(n / 10)
  let nEw = lastDigit + SumOfDigit(newDigit)
  return nEw
}

const varA = SumOfDigit(number)
console.log("nn", varA)

//simple and correct code

let Example = 12345

function SumOfDigit1(n) {
  if (n === 0) return 0

  return (n % 10) + SumOfDigit1(Math.floor(n / 10))
}

const Result = SumOfDigit1(Example)
console.log("nn", Result)
