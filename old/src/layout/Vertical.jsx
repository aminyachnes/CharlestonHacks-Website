import PropTypes from 'prop-types'

function Vertical(props) {
  const {children} = props
  return (
    <div>
      {children}
    </div>
  )
}

Vertical.propTypes = {
  children: PropTypes.any,
}

export default Vertical