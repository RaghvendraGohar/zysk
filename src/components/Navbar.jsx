import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id='navh1'>Untitled UI</h1>
            <div className="nav-buttons">
                <button>Home</button>
                <button>Products</button>
                <button>Resources</button>
                <button>Pricing</button>
            </div>
        </nav>
    );
};

export default Navbar;
