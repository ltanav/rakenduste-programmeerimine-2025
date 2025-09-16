import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  // Funktsioon counteri muutmiseks
  function increaseCounter(amount: number) {
    setCount(count => count + amount)
  }

  return (
    <>
      <h1>Vite + React + Lisett</h1>
      <div
        className="card"
        style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}
      >
        <button onClick={() => increaseCounter(100)}>+100</button>
        <button onClick={() => increaseCounter(50)}>+50</button>
        <button onClick={() => increaseCounter(25)}>+25</button>
        <button onClick={() => increaseCounter(1)}>+1</button>
        <button onClick={() => increaseCounter(-1)}>-1</button>
        <button onClick={() => increaseCounter(-25)}>-25</button>
        <button onClick={() => increaseCounter(-50)}>-50</button>
        <button onClick={() => increaseCounter(-100)}>-100</button>
        <button onClick={() => increaseCounter(0)}>count is {count}</button>
      </div>
    </>
  )
}

export default Counter
