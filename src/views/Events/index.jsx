import FullScreen from '../../layout/FullScreen'
import EventInfo from './EventInfo'

import hackNights from "/src/assets/events/hack_nights.svg" 
import hackOps from "/src/assets/events/hack_ops.svg" 
import harborHack from "/src/assets/events/harbor_hack.svg" 
import summerHack from "/src/assets/events/summer_hack.svg"

function Events() {
  return (
    <FullScreen>
      <div
        className='flex items-center flex-col w-full'
      >
        <EventInfo
          image={hackNights}
          title={"Hack Nights"}
          date={"24-26 June 2024"}
          description={"Turn your aspirations into tangible achievements! Unlock the potential of tech at the hackathon across diverse domains. Embrace the capabilities of AI to address complex challenges, be it in healthcare, education, environmental conservation, and beyond. CharlestonHacks Hack Nights is your opportunity to unleash your creativity, sharpen critical thinking and problem-solving skills, and explore new ideas with the latest technology."}
        />
        <EventInfo
          image={hackOps}
          title={"Hack Ops"}
          date={"Coming Soon"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies mi eget mauris. Pharetra sit amet aliquam id diam maecenas ultricies mi. Consectetur adipiscing elit duis tristique. Nullam non nisi est sit amet facilisis magna. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Venenatis lectus magna fringilla urna porttitor. Dui id ornare arcu odio ut sem. Non odio euismod lacinia at quis risus sed."}
        />
        <EventInfo
          image={harborHack}
          title={"Harbor Hack"}
          date={"Coming Soon"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies mi eget mauris. Pharetra sit amet aliquam id diam maecenas ultricies mi. Consectetur adipiscing elit duis tristique. Nullam non nisi est sit amet facilisis magna. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Venenatis lectus magna fringilla urna porttitor. Dui id ornare arcu odio ut sem. Non odio euismod lacinia at quis risus sed."}
        />
        <EventInfo
          image={summerHack}
          title={"Summer Hack"}
          date={"Coming Soon"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies mi eget mauris. Pharetra sit amet aliquam id diam maecenas ultricies mi. Consectetur adipiscing elit duis tristique. Nullam non nisi est sit amet facilisis magna. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Venenatis lectus magna fringilla urna porttitor. Dui id ornare arcu odio ut sem. Non odio euismod lacinia at quis risus sed."}
        />
      </div>
    </FullScreen>
  )
}

export default Events