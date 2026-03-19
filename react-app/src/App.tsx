import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <button className="fun" onClick={() => setIsModalOpen(true)}>
          click me for more fun
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {isModalOpen ? (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2>🎉 Surprise!</h2>
            <p>
              Why did the developer go broke? Because he used up all his cache!
            </p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      ) : null}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
