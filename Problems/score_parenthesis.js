function Parenthesis(score) {
  console.log("score")

  let stack = [0]

  for (let char of score) {
    if (char === "(") {
      stack.push(0)
    } else {
      const zero = stack.pop()
      if (zero === 0) {
        stack[stack.length - 1] += 1
      } else {
        stack[stack.length - 1] += 2 * zero
      }
    }
  }
  return stack[0]
}

const result = Parenthesis("((())(()))")
console.log("result==", result)
