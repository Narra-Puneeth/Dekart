import contact from '../img/contact(1).png';
import edit from '../img/edit.png';
import logout from '../img/log-out.png';
import reset from '../img/reset.png';
import './dropdown.css';

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
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt="sql"></img>
      <a href="/login"> {props.text} </a>
    </li>
  );
}

export default Dropdown;