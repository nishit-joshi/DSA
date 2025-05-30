const Name = "madam"

function Example(value) {
  if (value.length <= 1) return true
  if (value[0] !== value[value.length - 1]) return false

  return Example(value.slice(1, value.length - 1))
}

const data = Example(Name)

console.log("data", data)
