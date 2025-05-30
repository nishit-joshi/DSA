const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
]

const transform = people.reduce((acc, current) => {
  acc[current.name] = current.age
  return acc
}, {})

console.log("transform", transform)
