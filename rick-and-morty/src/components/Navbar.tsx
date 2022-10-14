import React from 'react';
import { Link } from 'react-router-dom';


type NavbarProps = {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {


    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Locations'}>Locations</Link></li>
            </ul>
        </nav>
    );
}