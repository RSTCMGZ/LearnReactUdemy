import { useState } from 'react'
import './App.css'
import Button from './components/UI/Button'

function App() {
  const [toggleParagraph, setToggleParagraph] = useState(false)
  const toggleParagraphHandler = () => {
    setToggleParagraph(true)
  }
  return (
    <div className='container'>
      <h1>Hello</h1>
      <b>{toggleParagraph ? 'true' : 'false'}</b> <br /> <br />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
