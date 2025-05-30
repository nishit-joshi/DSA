const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
]

// { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }

const groupByRole = items.reduce((acc, current, index, array) => {
  if (!acc[current.category]) {
    acc[current.category] = []
    acc[current.category].push(current.name)
  } else {
    acc[current.category].push(current.name)
  }

  return acc
}, {})

console.log("groupByRole", groupByRole)
