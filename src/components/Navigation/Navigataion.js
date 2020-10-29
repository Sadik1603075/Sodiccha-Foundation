import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigataion() {
    return (
        <div className="navigation">
            <div className="logo">Logo</div>

            <div className="nav-item">
                <Link to="/">Home</Link>
                <Link to="/">Donate</Link>
                <Link to="/">About</Link>
                <Link to="/login">SignIn</Link>
            </div>
        </div>
    )
}

export default Navigataion
