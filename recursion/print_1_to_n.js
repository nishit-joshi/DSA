const N = 9
let count = 0

function PrintRecursion() {
  while (count < N) {
    count += 1
    console.log("cont", count)
    PrintRecursion()
  }
}

PrintRecursion()
