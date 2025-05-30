let N = 4

let result = 1

function Factorial() {
  if (N > 1) {
    result *= N
    console.log("result==", result)
    N--
    Factorial()
  }
}

Factorial()
