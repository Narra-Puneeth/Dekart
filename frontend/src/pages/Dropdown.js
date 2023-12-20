import contact from '../img/contact(1).png';
import edit from '../img/edit.png';
import logout from '../img/log-out.png';
import reset from '../img/reset.png';
import './dropdown.css';

import { useLogout } from '../hooks/useLogout.js';
//import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom';
import React, {useState, useEffect, useRef} from 'react';

function Dropdown() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={contact} alt="sql"></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Options</h3>
          <ul>
            <DropdownItem img = {contact} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {reset} text = {"Reset Password"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt="sql"></img>
      <Link onClick={handleClick}> {props.text} </Link>
    </li>
  );
}

export default Dropdown;