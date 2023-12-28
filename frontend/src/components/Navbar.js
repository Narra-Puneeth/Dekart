import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Dropdown from './Dropdown'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import "./navbar.css";
const Navbar = () => {

  const { user } = useAuthContext();
  return (
    <header style={{backgroundColor:"#343a40",height:"50px",paddingBottom:"18px",margin:"0px",width:"100%"}}>
      <div className="container" style={{height:"50px"}} >
        <div className='marketplace'>
        <AddBusinessIcon htmlColor="#d9d9d9" style={{height:"35px",width:"35px"}}/>
        <span style={{marginLeft:"10px",color:"#d9d9d9"}}>Decart</span>
        </div>
        <nav>
          {!user && (
            <div>
              <Link to="/login" className="link-styles">Login</Link>
              <Link to="/signup" className="link-styles">Signup</Link>
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

export default Navbar;