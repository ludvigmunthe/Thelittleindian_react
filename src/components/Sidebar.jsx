// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuFunction } from '../utils.js'; 

const Sidebar = () => {
    return (
            <div className="sidebar_menu">
                <button id="btn" onClick={menuFunction}><i className="fa fa-bars"></i></button>
                <div id="myDropdown" className="dropdown-content">
                    <ul>
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li><NavLink to="/Menu">Menu</NavLink></li>
                        <li><NavLink to="/Onlineorder">Online orders</NavLink></li>
                        <li><NavLink to="/Catering">Catering</NavLink></li>
                    </ul>
                </div>
            </div>
    );
};

export default Sidebar;
