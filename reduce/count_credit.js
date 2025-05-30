const transactions = [
  { amount: 100, type: "credit" },
  { amount: 50, type: "debit" },
  { amount: 300, type: "credit" },
  { amount: 40, type: "debit" },
]

const totalCredit = transactions.filter((data) => data.type === "credit")

console.log("totalCredit", totalCredit)

const totalCreditPrice = totalCredit.reduce((acc, current) => {
  acc = current.amount + acc
  return acc
}, 0)

console.log("totalCreditPrice", totalCreditPrice)
