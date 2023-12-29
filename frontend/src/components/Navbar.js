  import { Link } from 'react-router-dom'
  import { useAuthContext } from '../hooks/useAuthContext'
  import AddBusinessIcon from '@mui/icons-material/AddBusiness';
  import {Nav,Navbar,Container,NavDropdown} from "react-bootstrap"

  const NavB = () => {

    const { user } = useAuthContext();
    return (
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >MARKET PLACE</Navbar.Brand>
        
          {!user && (
              <Nav>
                <Nav.Link class="fs-2" href="/login">LOGIN</Nav.Link>

                <Nav.Link href="/signup">SIGNUP</Nav.Link>
              </Nav>
            )}
            {user && (
              <Nav>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            )}
        
        </Container>
      </Navbar>
      </div>
    )
  }

  export default NavB;


  // <header style={{backgroundColor:"DodgerBlue",height:"50px",paddingBottom:"18px",margin:"0px",width:"100%"}}>
  //       <div className="container" style={{height:"50px"}} >
  //         <div className='marketplace'>
  //         <AddBusinessIcon htmlColor="lightblue" style={{height:"35px",width:"35px"}}/>
  //         <span style={{marginLeft:"10px",color:"lightblue"}}>Market place</span>
  //         </div>
  //         <nav>
  //           {!user && (
  //             <div>
  //               <Link to="/login" className="link-styles">Login</Link>
  //               <Link to="/signup" className="link-styles">Signup</Link>
  //             </div>
  //           )}
  //           {user && (
  //             <div>
  //               <Dropdown/>
  //             </div>
  //           )}
  //         </nav>
  //       </div>
  //     </header>