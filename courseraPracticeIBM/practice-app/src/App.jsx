import { useState } from 'react'
import './App.css'
import ParentComp from './components/ParentComp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ParentComp />
      </div>
    </>
  )
}

export default App
