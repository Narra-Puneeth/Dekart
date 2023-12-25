import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./sidebar.css"
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import SaveIcon from '@mui/icons-material/Save';
import StoreIcon from '@mui/icons-material/Store';
import CableIcon from '@mui/icons-material/Cable';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WeekendIcon from '@mui/icons-material/Weekend';

function Sidebar() {
  const navigate = useNavigate(); // useNavigate hook

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={() => handleNavigation('/feed')}>
            <Link to="/feed" className="sidebarLink">
              <TravelExploreOutlinedIcon htmlColor="SlateBlue" className="sidebarIcon" />
              <span className="sidebarListItemText">Browse</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/chats')}>
            <Link to="/chats" className="sidebarLink">
              <SaveIcon htmlColor="Green" className="sidebarIcon" />
              <span className="sidebarListItemText">Saved items</span>
            </Link>
          </li>
        </ul>
        <button className='sell-button'>+ Sell Something</button>
        <hr className="sidebarHr" />
        <ul className="sidebarList">
          <li>
            <h2>Categories</h2>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/feed')}>
            <Link to="/feed" className="sidebarLink">
              <StoreIcon htmlColor="Blue" className="sidebarIcon" />
              <span className="sidebarListItemText">Recently Uploaded</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/profile')}>
            <Link to="/profile" className="sidebarLink">
              <StoreIcon htmlColor="Blue" className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/chats')}>
            <Link to="/chats" className="sidebarLink">
              <CableIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Cables</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/chats')}>
            <Link to="/chats" className="sidebarLink">
              <PhoneAndroidIcon htmlColor="silver" className="sidebarIcon" />
              <span className="sidebarListItemText">Electronics</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/chats')}>
            <Link to="/chats" className="sidebarLink">
              <LibraryBooksIcon htmlColor="lightblue" className="sidebarIcon" />
              <span className="sidebarListItemText">Books</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={() => handleNavigation('/chats')}>
            <Link to="/chats" className="sidebarLink">
              <WeekendIcon htmlColor="Brown" className="sidebarIcon" />
              <span className="sidebarListItemText">Furniture</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
