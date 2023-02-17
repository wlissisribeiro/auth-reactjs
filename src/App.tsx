import { useState } from 'react'
import './App.css'
import { ContextProvider } from './context/ContextProvider'
import {PagesRoutes} from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <div className="App">
        <PagesRoutes/>
      </div>
    </ContextProvider>
  )
}

export default App
