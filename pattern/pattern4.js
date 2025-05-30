let row = 5
let pattern = ""

for (let i = 0; i < row; i++) {
  for (let j = 1; j <= i; j++) {
    //print row
    pattern += i
  }
  pattern += "\n"
}

console.log(pattern)
