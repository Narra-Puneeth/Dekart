// Layout.js
import React from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component
import './layout.css'; // Import your CSS file for layout styles
import { Routes, Route } from 'react-router-dom';
import Feed from "../pages/feed/Feed";
import Chats from '../pages/chats/Chats';
const Layout = () => {
  return (
      <div className="layout">
        <Sidebar /> {/* Render the Sidebar */}
        <div className="content">
          <Routes>
            <Route path="*" element={<Feed />} />
            <Route path="/chats" element={<Chats />} />
            {/* Other routes for different sections */}
          </Routes>
        </div>
      </div>
  );
};

export default Layout;