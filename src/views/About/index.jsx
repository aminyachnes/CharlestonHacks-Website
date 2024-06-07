import FullScreen from '../../layout/FullScreen'
import Socials from './Socials'
import BoardMembers from './BoardMembers'

function About() {
  return (
    <FullScreen>
      <div
        className='flex items-center flex-col'
      >
        <BoardMembers/>
        <Socials/>
      </div>
    </FullScreen>
  )
}

export default About