import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LevelOne from './components/LevelOne'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './redux/slices/usersSlice'
import { toggleTheme } from './redux/slices/themeSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Redux demo)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button
          onClick={() =>
            dispatch(addUser({ name: `User ${Date.now()}`, bio: 'Auto added' }))
          }
          style={{ marginLeft: 8 }}
        >
          Add user
        </button>

        <button onClick={() => dispatch(toggleTheme())} style={{ marginLeft: 8 }}>
          Toggle theme (current: {theme})
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <LevelOne />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
