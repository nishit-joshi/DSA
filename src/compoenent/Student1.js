import React, { useEffect, useState } from "react"

function Student1() {
  const [counter, setCounter] = useState([])

  const handleCounter = () => {
    setCounter(counter + 10)
  }

  return (
    <>
      <div>
        <h3> {counter}</h3>
      </div>
      <div>
        <button onClick={handleCounter}>Add Count</button>
      </div>
    </>
  )
}

export default Student1
