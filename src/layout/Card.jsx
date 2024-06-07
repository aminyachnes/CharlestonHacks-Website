
import { motion } from "framer-motion"

function Card(props) {
  
  const {
    children,
    animate,
    transition,
    variants,
    initial,
    exit,
    onClick,
    background = "bg-[url('/src/assets/card_back.svg')]"
  } = props

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-950">
      <motion.div
        className={`
          bg-radient-ellipse-c from-slate-500 from-0% to-gray-950 to-80% 
          aspect-[428/604] 
          min-h-[100vw] sm:min-h-[80%] 
          max-w-[85%]
        `/*aspect [428/604] comes from the card svg ratio */}
        onClick={onClick} 
        animate={animate}
        transition={transition}
        variants={variants}
        initial={initial}
        exit={exit}
      >
        <div className={`
          flex items-center justify-center 
          bg-no-repeat ${background}
          aspect-[2/3] 
        `}>
          <div className="aspect-[2/3] w-8/12"> {/* to debug boundry add: "bg-gray-500" */}
            {children}
          </div>
        </div>
      </motion.div>
      </div>
  )
}



export default Card