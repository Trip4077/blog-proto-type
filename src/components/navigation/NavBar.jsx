import React from 'react';
import Logo from './Logo';
import Links from './Links';

import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <Logo />
            <Links />
        </nav>
    )
}

export default NavBar;