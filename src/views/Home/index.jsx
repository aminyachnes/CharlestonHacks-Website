import { useState, useEffect } from "react"
import Menu from "./Menu"
import Card from "../../layout/Card"

const animationDuration = 0.4 // in seconds

function Home(props) {
  const {

  } = props

  const [status, setStatus] = useState('default')
  console.log(status)
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (e) => {
    if (status === 'default') {
      setStatus('flipped')
    }
    if (status === 'flipped') {
      setStatus('unflipped')
    }
    if (status === 'unflipped') {
      setStatus('flipped')
    }

  }

  useEffect(() => {
    const delay = animationDuration*0.7*1000
    if (status === 'flipped') {
      setTimeout(() => {
        setShowMenu(true)
      }, delay)
    }
    if (status === 'unflipped') {
      setTimeout(() => {
        setShowMenu(false)
      }, delay)
    }
  }, [status])

  const background = showMenu ? "bg-[url('/src/assets/card_back.svg')]" : "bg-[url('/src/assets/card_front.svg')]"

  const variants = {
    default: null,
    flipped: {
      rotateZ: ["0deg", "-45deg", "-90deg", "-180deg", "45deg", "0deg"],
      rotateY: ["180deg", "90deg", "-90deg", "0deg"],
      rotateX: ["0deg", "90deg", "180deg", "90deg","0deg"],
    },
    unflipped: {
      rotateZ: ["0deg", "45deg", "90deg", "180deg", "-45deg", "0deg"],
      rotateY: ["-180deg", "-90deg", "0deg", "90deg", "0deg"],
      rotateX: ["0deg", "-90deg", "-180deg", "-90deg","0deg"],
    },
  }

  return (
     // {/* <div className="bg-gray-500 shadow-md rounded-lg px-8 py-6 h-3/5 md:h-5/6  aspect-[2/3] bg-[url('/src/assets/card_back.svg')]"> */}
    <Card
      animate={status}
      transition={{ duration: animationDuration }}
      variants={variants}
      exit={{
        rotateZ: ["0deg", "-45deg", "-90deg", "-180deg", "45deg", "0deg"],
        rotateY: ["180deg", "90deg", "-90deg", "0deg"],
        rotateX: ["0deg", "90deg", "180deg", "90deg","0deg"],
      }}
      onClick={handleClick}
      background={background}
    >
      {showMenu ? (<Menu />) : null }
    </Card>
  )
}

export default Home
