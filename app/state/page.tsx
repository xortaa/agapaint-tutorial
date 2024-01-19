"use client"

import { useState, useEffect } from "react"
import stateStyles from "@/styles/state.module.scss"

function StatePage() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.log("useEffect called")
  }, [])

  function decrement() { 
    setCount(count - 1)
  }

  function reset() { 
    setCount(0)
  }

  function reveal() { 
    setShow(true)
  }

  function hide() { 
    setShow(false)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => {setCount(count + 1)}}>+</button>

      <h1 className={show ? stateStyles.show : stateStyles.hidden}>peek a boo</h1>
      <button onClick={reveal}>reveal</button>
      <button onClick={hide}>hide</button>
    </div>
  )
}
export default StatePage