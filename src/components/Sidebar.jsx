import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('home');
    return (
        <div className="sidebar">
            <div
                className={`sidebar-item ${activeItem === 'home' ? 'active' : ''}`}
                onClick={() => navigate("/")}
            >
                Home
            </div>
            <div
                className={`sidebar-item ${activeItem === 'contacts' ? 'active' : ''}`}
                onClick={() => navigate("/contact")}
            >
                Contacts
            </div>
            <div
                className={`sidebar-item ${activeItem === 'information' ? 'active' : ''}`}
                onClick={() => navigate("/information")}
            >
                Information
            </div>
            <div
                className={`sidebar-item ${activeItem === 'guide' ? 'active' : ''}`}
                onClick={() => navigate("/guide")}
            >
                Guide
            </div>
        </div>
    )
}

export default Sidebar
