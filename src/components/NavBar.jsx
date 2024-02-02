import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to={`/`}>Root</Link>
          <Link to={`/about`}>About</Link>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default NavBar
