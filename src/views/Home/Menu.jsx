import MenuButton from '../../components/MenuButton'
import { Link } from 'react-router-dom'

function Menu(props) {

  const {
    navigation
  } = props

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <MenuButton to='/events'>
          Events
      </MenuButton>
      <MenuButton to='/about'>
        About
      </MenuButton>
      <MenuButton to='mailto:hello@charlestonhacks.com'>
          Contact Us
      </MenuButton>
    </div>
  )
}

export default Menu