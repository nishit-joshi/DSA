function MixParenthesis(score) {
  let stack = [0]

  for (let char of score) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(0)
    } else {
      const top = stack.pop()
      if (top === 0) {
        stack[stack.length - 1] += 1
      } else {
        stack[stack.length - 1] += 2 * top
      }
    }
  }
  return stack[0]
}

const result = MixParenthesis("{[([])]}")
console.log("result==", result)
