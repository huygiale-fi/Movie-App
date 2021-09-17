import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillDashboard} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {MdMovieFilter} from 'react-icons/md'
import './Sidebar.scss';


function Navbar() {

  return (
    <div className="sidebar">
      <h4 className="logo">CINEMA BOOKING</h4>
        <ul className="listsidebar">
          <li className="sidebar-item"><Link to="/admin"><AiFillDashboard style={{margin:'0 5px 3px 0'}}/> DashBoard</Link></li>
          <li className="sidebar-item"><Link to="/admin/user"><FaUserCircle style={{margin:'0 5px 3px 0'}}/> User</Link></li>
          <li className="sidebar-item"><Link to="/admin/showtime"><MdMovieFilter style={{margin:'0 8px 3px 0'}}/>Showtime</Link></li>
          <li className="sidebar-item"><Link>huygiale</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;