import { useState } from 'react'
import './App.css'

function App() {
  const [isRed, setIsRed] = useState(true)

  return (
    <div className="container">
      <button
        className={`toggle-button ${isRed ? 'red' : 'green'}`}
        onClick={() => setIsRed((prev) => !prev)}
        aria-label={isRed ? 'Red – click to turn green' : 'Green – click to turn red'}
      />
    </div>
  )
}

export default App
