import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Branding from './branding';

const Header = function() {
    return (
        <div className="header">
            <div className="container">
                <Branding />
                <Nav />
            </div>
        </div>
    )
}

export default Header;
