const N = 6
let count = 0
let result = 0

function SumFirstNNumbers() {
  while (count < N) {
    count++
    result += count
    console.log("result==", result)
    SumFirstNNumbers()
  }
}

SumFirstNNumbers()
