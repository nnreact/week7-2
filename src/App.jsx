import React, { useState } from 'react'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {

  const [count, setCount] = useState(0);

  const handleChanges = (type) => {
    type === "increment" ? setCount(count + 1) : (count !== 0) ? setCount(count - 1) : "";
  }


  return (
    <div className='main-cont'>
      <Header count={count} />
      <Body count={count} handleChanges={handleChanges} />
      <Footer />
    </div>
  )
}

export default App