import React, { useState } from "react"
import PropTypes from 'prop-types'

// maps all the routes
const getRoutes = (children) => {
  const routes = {}
  children.forEach((child) => {

    if (child.props.index) {
      routes['index'] = React.cloneElement(child, {path: 'index'})
    } else {
      routes[child.props.path] = child
    }
  })
  return routes
}

function Routes(props) {

  const {children} = props

  const [history, setHistory] = useState(['index'])

  const push = (path) => {
    setHistory([path, ...history])
  }
  const back = () => {
    if(history.length <= 1) {
      setHistory(['index'])
    }
    setHistory([...history.shift()])
  }
  
  const navigation = {
    current: history[0],
    push,
    back
  }

  const paths = getRoutes(children)

  let matchedRoute = paths[history[0]]
  // if matchedRoute is missing get the wildcard
  if (!matchedRoute) {
    matchedRoute = paths['*']
  }

  // if there is no wildcard return an empty page
  if (!matchedRoute) {
    console.error('Invalid route and missing fallback "*" path')
    return (
      <></>
    )
  }
  const View = React.cloneElement(matchedRoute, {navigation: navigation})

  return (
    <>
      {View}
    </>
  )

}

Routes.propTypes = {
  children: PropTypes.any,
}

export default Routes