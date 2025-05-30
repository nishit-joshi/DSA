const value = 36
const result = []

for (let i = 0; i <= value; i++) {
  if (value % i === 0) {
    result.push(i)
  }
}

console.log("result==", result)
