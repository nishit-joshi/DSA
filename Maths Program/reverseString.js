function reverseString(name) {
  if (name.length <= 0) {
    return name
  }
  return reverseString(name.slice(1)) + name[0]
}

console.log(reverseString("Hello"))
