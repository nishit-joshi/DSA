function ValidParenthesis(scope) {
  let open = 0
  let close = 0

  for (let char of scope) {
    if (char === "(") {
      open++
    } else {
      close++
    }
  }
  if (open === close) {
    return open * 2
  } else {
    return false
  }
}

const result = ValidParenthesis(")()(()(())")
console.log("result==", result)
