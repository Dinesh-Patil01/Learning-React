import { useState } from "react";
import DataDisplay from "./components/dataDisplay";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataDisplay />
    </>
  )
}

export default App
