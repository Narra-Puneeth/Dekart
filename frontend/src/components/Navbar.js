import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Dropdown from '../pages/Dropdown'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import {AddBusinessIcon} from '@mui/icons-material';
// import { PermMedia} from "@mui/icons-material";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import "./navbar.css";
const Navbar = () => {

  const { user } = useAuthContext();
  return (
    <header style={{backgroundColor:"DodgerBlue",height:"50px",paddingBottom:"18px"}}>
      <div className="container" style={{height:"50px"}} >
        {/* <Link to="/">
          <h1>Market Place</h1>
        </Link> */}
        <div className='marketplace'>
        <AddBusinessIcon htmlColor="lightblue" style={{height:"35px",width:"35px"}}/>
        <span style={{marginLeft:"10px",color:"lightblue"}}>Market place</span>
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