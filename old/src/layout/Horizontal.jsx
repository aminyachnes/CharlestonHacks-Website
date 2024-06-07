import PropTypes from 'prop-types'

function Horizontal(props) {
  const {children} = props
  return (
    <div>
      {children}
    </div>
  )
}

Horizontal.propTypes = {
  children: PropTypes.any,
}

export default Horizontal