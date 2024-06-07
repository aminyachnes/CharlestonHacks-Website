import MenuButton from '../../components/MenuButton'


function Menu(props) {

  const {
    navigation
  } = props

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <MenuButton>Events</MenuButton>
      <MenuButton>About</MenuButton>
      <MenuButton>Contact</MenuButton>
      <MenuButton>Contact Us</MenuButton>
    </div>
  )
}

export default Menu