import { useState } from "react"
import Card from "./components/Cart/Card"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"

function App() {
  const [cardIsShow, setCardIsShow] = useState(false)

  const showCartHandler = () => {
    setCardIsShow(true)
  }
  const hideCartHandler = (e) => {
    e.preventDefault()
    setCardIsShow(false)
  }
  return (
    <div>
      {cardIsShow && <Card onClose={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <Hero />
      <Products />
    </div>
  )
}

export default App
