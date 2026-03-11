import { useState } from 'react'
import './App.css'

function App() {
  const [isRed, setIsRed] = useState(true)
  const [textValue, setTextValue] = useState('')

  return (
    <div className="container">
      <div className="buttons">
        <button
          className={`toggle-button ${isRed ? 'red' : 'green'}`}
          onClick={() => setIsRed((prev) => !prev)}
          aria-label={isRed ? 'Red – click to turn green' : 'Green – click to turn red'}
        />
        <button
          className="toggle-button blue"
          onClick={() => setTextValue('hello there')}
          aria-label="Blue button"
        />
      </div>
      <input
        type="text"
        className="text-box"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Text will appear here..."
      />
    </div>
    <div>
      <body>
        
     
  )
}

export default App
