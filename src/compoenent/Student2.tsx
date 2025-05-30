import React from "react"
import { useState } from "react"

// Define the TypeScript interface for the props
interface ChildComponentProps {
  value: string
}

const ChildComponent: React.FC<ChildComponentProps> = React.memo(
  ({ value }) => {
    console.log("ChildComponent rendered") // Log to observe re-renders
    return <div>{value}</div>
  }
)

const ParentComponent: React.FC = () => {
  const [value, setValue] = useState<string>("Initial Value")
  const [count, setCount] = useState<number>(0)

  const handleChange = () => {
    setValue("Updated Value") // This will trigger a re-render of ChildComponent
  }

  const handleIncrement = () => {
    setCount(count + 1) // This will not trigger a re-render of ChildComponent
  }

  return (
    <div>
      <button onClick={handleChange}>Change Value</button>
      <button onClick={handleIncrement}>Increment Count ({count})</button>
      <ChildComponent value={value} />
    </div>
  )
}

export default ParentComponent
