import { useState } from 'react'
import DataDisplay from './component/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataDisplay />
    </>
  )
}

export default App
