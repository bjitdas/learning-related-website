import React from 'react';
import { Link } from 'react-router-dom';
import { FcReading } from "react-icons/fc";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-text">
                <h1><FcReading/> Learning Academy</h1>
            </div>
            <nav className="w-75 text-center">
                <Link to="/home">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/success">Success-Story</Link>
                <Link to="/about">About Us</Link>
            </nav>
        </div>
    );
};

export default Header;