import { Link } from 'react-router-dom'
//import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Dropdown from '../pages/Dropdown'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Navbar = () => {
  // const { logout } = useLogout()
  const { user } = useAuthContext();
  // const handleClick = () => {
  //   logout()
  // }

  return (
    <header>
      <div className="container" >
        <Link to="/">
          <h1>Market Place</h1>
        </Link>
        <nav>
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
           {user && (
            <div>
              <Dropdown/>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar