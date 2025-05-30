const users = [
  { id: 101, name: "Nishit" },
  { id: 102, name: "Alex" },
]

// Output:
//   {
//     101: { id: 101, name: "Nishit" },
//     102: { id: 102, name: "Alex" }
//   }

const lookup = users.reduce((acc, current) => {
  if (!acc[current.id]) {
    acc[current.id] = current
  }
  return acc
}, {})

console.log(":lookup", lookup)
