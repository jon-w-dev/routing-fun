import * as React from 'react'

import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Root() {
  const [state, setState] = React.useState(null)

  React.useEffect(() => {
    console.log('Well hello there, The root has been mounted')
    setState(window.location.href)
  }, [state])

  return (
    <>
      <NavBar />
      <h1>ROOT</h1>
      <div>This is the root Component</div>
      <p>-----------------------------------</p>
      <Outlet />
    </>
  )
}

export default Root
