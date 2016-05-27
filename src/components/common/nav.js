import React from 'react';
import { Link } from 'react-router';

const Nav = function() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/notes">Notes</Link></li>
            </ul>
        </div>
    )
}

export default Nav;
