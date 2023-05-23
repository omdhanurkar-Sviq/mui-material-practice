import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';

const MenuComponent = () => {
    const [anchor, setAnchor] = useState(null);

    function openMenu(e) {
        setAnchor(e.currentTarget);
    }
    function closeMenu(e) {
        setAnchor(null);
    }

    const menuStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    };

    const menuItemStyle = {
        marginBottom: '10px',
    };

    return (
        <Router>
            <h1 style={{ textAlign: 'center' }}>React Material UI | Menu</h1>
            <div style={menuStyle}>
                <Button onClick={openMenu}>Menu</Button>
                <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={closeMenu}>
                    <MenuItem style={menuItemStyle} onClick={closeMenu}>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem style={menuItemStyle} onClick={closeMenu}>
                        <Link to="/about">About</Link>
                    </MenuItem>
                </Menu>
            </div>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default MenuComponent;

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}
