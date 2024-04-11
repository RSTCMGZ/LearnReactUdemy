import { useCallback, useState } from 'react'
import './App.css'
import Button from './components/UI/Button'
import MyElement from './components/UI/MyElement'

function App() {
  const [toggleParagraph, setToggleParagraph] = useState(false)
  const [toggleAllow, setToggleAllow] = useState(false)


  const toggleParagraphHandler = useCallback(() => {
    if (toggleAllow) {
      setToggleParagraph((prevState) => !prevState)
    }
  }, [])

  const toggleAllowHandler = useCallback(() => {
    setToggleAllow(true)
  }, [])
  return (
    <div className='container'>
      <h1>Hello</h1>
      <MyElement show={toggleParagraph} />
      <br /> <br />
      <Button onClick={toggleAllowHandler}>Toggle Paragraph</Button>
      <br /> <br />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
