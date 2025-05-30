const N = 3
let count = 0

function CallName() {
  while (count < N) {
    count += 1
    console.log("Hello")
    CallName()
  }
}

CallName()
