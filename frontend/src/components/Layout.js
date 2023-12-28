// Layout.js
import React from 'react';
//import Sidebar from './Sidebar'; // Import your Sidebar component
import './layout.css'; // Import your CSS file for layout styles
import { Routes, Route } from 'react-router-dom';
import Feed from "../pages/feed/Feed";
import Chats from '../pages/chats/Chats';
import Profile from '../pages/profile/Profile';
import Selling from '../pages/selling/Selling';
const Layout = () => {
  return (
      <div className="layout">
        
        <div className="content">
          <Routes>
            <Route path="*" element={<Feed />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sell" element={<Selling />} />
            {/* Other routes for different sections */}
          </Routes>
        </div>
      </div>
  );
};

export default Layout;