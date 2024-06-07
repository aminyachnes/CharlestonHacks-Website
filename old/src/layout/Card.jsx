import PropTypes from 'prop-types'

function Card(props) {
  const {children} = props
  return (
    <div className='h-screen flex items-center justify-center w-full bg-gray-950'>
      <div className='bg-gray-500 shadow-md rounded-lg px-8 py-6 h-3/5 md:h-5/6  aspect-[2/3]'>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
}

export default Card