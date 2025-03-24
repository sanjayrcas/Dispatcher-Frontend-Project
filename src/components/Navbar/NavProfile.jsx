import React from 'react';
import '../Navbar/style/NavProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SidebarDashboard from '../Sidebar/SidebarDashboard';

export default function NavProfile() {
    return (
        <div className='NavProfile-container'>
            <div className="NavProfile-main-container">
                {/* navbar */}
                <nav className="navbar ">
                    <div className="container-fluid">
                        {/* sidebar */} 
                        <SidebarDashboard/>
                        {/* user profile icon */}
                        <div className="dropdown dropdown-container navbar-brand">
                            <button className="btn border-0 rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faCircleUser} className='NavProfileUserIcon'/>
                            </button>
                            <ul className="dropdown-menu userProfileDropDown">
                                <li><Link className="dropdown-item" to="/Login">Profile</Link></li>
                                <li><Link className="dropdown-item" to="#">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
