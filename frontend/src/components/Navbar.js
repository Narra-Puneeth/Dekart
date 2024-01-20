import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
<<<<<<< Updated upstream
    <header>
      <div className="container">
        <Link to="/">
          <h1>Market Place</h1>
        </Link>
=======
    <header style={{backgroundColor:"gray",height:"50px",paddingBottom:"18px",width:"100%"}}>
      <div className="container" style={{height:"50px"}} >
        <AddBusinessIcon htmlColor="lightblue" style={{height:"35px",width:"35px"}} className='icon' />
        <span  className='title' style={{color:"lightblue"}}>Market place</span>
        
>>>>>>> Stashed changes
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar