let digit = 589674
let cnt = 0

//extraction of digits by  digit/10

const reverseArray = []
while (digit > 0) {
  cnt = cnt + 1
  lastDigit = digit % 10
  console.log("lastDigit===", lastDigit)

  reverseArray.push(lastDigit)
  digit = Math.floor(digit / 10)
  console.log(" digit===", digit)
}

console.log("reverse===", reverseArray.join(""))
console.log("count digit===", cnt)

return cnt
