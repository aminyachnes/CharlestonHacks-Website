function CardBack(props) {

  const {
    onClick
  } = props

  return (
    <div 
      className="h-full flex flex-col justify-center items-center"
      onClick={onClick}
    >
      Card Back
    </div>
  )
}

export default CardBack