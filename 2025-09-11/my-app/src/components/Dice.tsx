import React, { useState } from "react"
import "./Dice.css"

function Dice() {
  const [dice, setDice] = useState(1)

  // Funktsioon, mis genereerib numbri 1-6 ja salvestab state'i
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDice(randomNumber)
  }

  return (
    <div className="dice-container">
      <h2>Dice Roll: {dice}</h2>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default Dice
