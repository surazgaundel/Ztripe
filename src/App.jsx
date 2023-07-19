import { useState } from 'react'
import RoutesPage from './RoutesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesPage/>
    </>
  )
}

export default App
