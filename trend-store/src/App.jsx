import { useState } from "react"
import Card from "./components/Cart/Card"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"
import cartProvider from "./context/cartProvider"

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
    <cartProvider>
      {cardIsShow && <Card onClose={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <Hero />
      <Products />
    </cartProvider>
  )
}

export default App
