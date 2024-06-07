
import { motion } from "framer-motion"

import "./FullScreen.css"

// card border
import botLeftCorner from '/src/assets/card/Card_Border_bot_left_corner.svg'
import botLeftStretch from '/src/assets/card/Card_Border_bot_left_stretch.svg'
import botRightCorner from '/src/assets/card/Card_Border_bot_right_corner.svg'
import botRightStretch from '/src/assets/card/Card_Border_bot_right_stretch.svg'
import bottomCenter from '/src/assets/card/Card_Border_bottom_center.svg'
import centerLeftStretch from '/src/assets/card/Card_Border_center_left_stretch.svg'
import centerRightStretch from '/src/assets/card/Card_Border_center_right_stretch.svg'
import topCenter from '/src/assets/card/Card_Border_top_center.svg'
import topLeftCorner from '/src/assets/card/Card_Border_top_left_corner.svg'
import topLeftStretch from '/src/assets/card/Card_Border_top_left_stretch.svg'
import topRightCorner from '/src/assets/card/Card_Border_top_right_corner.svg'
import topRightStretch from '/src/assets/card/Card_Border_top_right_stretch.svg'

function FullScreen(props) {
  
  const {
    children,
    animate = {
      // rotateZ: ["0deg", "-45deg", "-90deg", "-180deg", "45deg", "0deg"],
      // rotateY: ["180deg", "90deg", "-90deg", "0deg"],
      // rotateX: ["0deg", "90deg", "180deg", "90deg","0deg"],
      // width: ["60vw", "70vw", "80vw", "90vw", "100vw"],
      // height: ["40vh", "60vh", "70vh", "80vh", "100%"],
      rotateZ: ["0deg", "-45deg", "-90deg", "-180deg", "45deg", "0deg"],
      rotateY: ["180deg", "90deg", "-90deg", "0deg"],
      rotateX: ["0deg", "90deg", "180deg", "90deg","0deg"],
      opacity: [0, 0, 1, 1, 1, 1, 1],
      scaleX: [0.1, 0.25, 0.5, 0.6, 0.8, 1],
      scaleY: [0.05, 0.1, 0.15, 0.2, 0.25, 1],
      transformOrigin: ['center'],
      position: ["absolute"],
      top: ["-40%", "-40%","-40%", "-40%","-40%", "0%"]

    },
    transition = { duration: 0.9 },
    variants,
    initial = {opacity: 0},
    exit,
    onClick
  } = props

  return (
    <div className=" h-screen flex items-center justify-center bg-gray-950">
      <motion.div
        className={`parent bg-radient-ellipse-c from-slate-500 from-0% to-gray-950 to-90% min-w-[100vw]`}
        animate={animate}
        transition={transition}
        variants={variants}
        initial={initial}
        exit={exit}
        // onAnimationComplete={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
          <div className="top-left-corner" style={{ backgroundImage: `url(${topLeftCorner}) `}}>
          </div>
          <div className="center-left-stretch" style={{ backgroundImage: `url(${centerLeftStretch})`}}>
            
          </div>
          <div className="bot-left-corner" style={{ backgroundImage: `url(${botLeftCorner})`}}> 
            
          </div>
          <div className="bot-left-stretch" style={{ backgroundImage: `url(${botLeftStretch})`}}> 
            
          </div>
          <div className="bottom-center" style={{ backgroundImage: `url(${bottomCenter})`}}> 
            
          </div>
          <div className="bot-right-stretch" style={{ backgroundImage: `url(${botRightStretch})`}}> 
            
          </div>
          <div className="bot-right-corner" style={{ backgroundImage: `url(${botRightCorner})`}}> 
            
          </div>
          <div className="center-right-stretch" style={{ backgroundImage: `url(${centerRightStretch})`}}> 
            
          </div>
          <div className="top-right-corner" style={{ backgroundImage: `url(${topRightCorner})`}}> 
            
          </div>
          <div className="top-right-stretch" style={{ backgroundImage: `url(${topRightStretch})`}}> 
            
          </div>
          <div className="top-center" style={{ backgroundImage: `url(${topCenter})`}}> 
            
          </div>
          <div className="top-left-stretch" style={{ backgroundImage: `url(${topLeftStretch})`}}> 
            
          </div>
          <div className="content w-full"> 
            {children}
          </div>
        </motion.div> 
      </div>
    // <div className="min-h-[100vh]  flex items-center justify-center w-full bg-gray-950">
    //   <motion.div
    //     className={`
    //       flex items-center justify-center
    //       size-full
    //     `}
    //     animate={animate}
    //     transition={transition}
    //     variants={variants}
    //     initial={initial}
    //     exit={exit}
    //     style={{
    //       border: "solid transparent",
    //       borderWidth: "10vh 10vw",
    //       borderImageSource: "url('/src/assets/card_back.svg')",
    //       borderImageSlice: "14.5% 15.5%"
    //       // "border-image-slice":0 40 0 40"] 

    //     }}
    //   >
    //     <div className="size-full">{/* to debug boundry add: "bg-gray-500" */}
    //       {children}
    //     </div>
    //   </motion.div>
    // </div>
  )
}


export default FullScreen