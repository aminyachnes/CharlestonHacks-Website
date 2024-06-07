import PropTypes from 'prop-types'

// ** Layout
import Card from '../layout/Card'
import Vertical from '../layout/Vertical'
import Horizontal from '../layout/Horizontal'


const layoutMap = {
  'Card': Card,
  'Vertical': Vertical,
  'Horizontal': Horizontal,
}

function Route(props) {

  const {
    layout,
    element,
    navigation
  } = props

  const Layout = layoutMap[layout]
  if (!Layout) {
    console.error('Invalid Layout Type')
  }
  const Element = element

  return (
    <Layout>
      <Element navigation={navigation} />
    </Layout>
  )

}

Route.propTypes = {
  path: PropTypes.any,
  layout: PropTypes.any,
  element: PropTypes.any,
  index: PropTypes.bool,
  navigation: PropTypes.object,
}


export default Route