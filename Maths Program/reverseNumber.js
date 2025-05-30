//reverse number and do not include zero if start with zero

let N = 7789
let reverseNumber = 0

while (N > 0) {
  reverseNumber = reverseNumber * 10 + (N % 10)
  N = Math.floor(N / 10) // Remove the last digit from N
}
console.log(reverseNumber)

return reverseNumber


