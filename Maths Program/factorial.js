//using recursion

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log("ans", factorial(6))

//using iteration

const value = 7

let result = 1
for (let i = 2; i < value; i++) {
  result = result * i
}

console.log("result", result)
