let row = 5
let pattern = ""

for (let i = 0; i <= row; i++) {
  for (let j = row; j > i; j--) {
    pattern += "*"
  }
  pattern += "\n"
}
console.log(pattern)
