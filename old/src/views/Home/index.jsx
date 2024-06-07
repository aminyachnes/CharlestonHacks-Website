import { useState } from "react"
import Menu from "./Menu"
import CardBack from "./CardBack"

function Home(props) {

  const {
    
  } = props

  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  if (flipped) {
    return (
      <Menu
        onClick={handleClick}
      />
    )
  } else {
    return (
      <CardBack
        onClick={handleClick}
      />
    )
  }
}

export default Home