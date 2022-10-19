import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export const Navbar: React.FC = () => {
    const[active,setActive] = useState<boolean>(false);

    return (
        <nav className='navbar'>
            <ul className='navbar__regular-menu'>
                <li className='navbar__regular-menu__item'><Link to={'/'} className='navbar__regular-menu__item__link'>Home</Link></li>
                <li className='navbar__regular-menu__item'><Link to={'/Characters'} className='navbar__regular-menu__item__link'>Characters</Link></li>
                <li className='navbar__regular-menu__item'><Link to={'/Episodes'} className='navbar__regular-menu__item__link'>Episodes</Link></li>
                <li className='navbar__regular-menu__item'><Link to={'/Locations'} className='navbar__regular-menu__item__link'>Locations</Link></li>
            </ul>

            <div className={active? "navbar__hamburger activeHamburger" : "navbar__hamburger"} onClick={()=>setActive(!active)}>
                <div className='navbar__hamburger__line one'></div>
                <div className='navbar__hamburger__line two'></div>
                <div className='navbar__hamburger__line three'></div>
            </div>
           
            <div className='navbar__overlay' style={active? {display:"block"}:{display:"none"}} onClick={()=>setActive(false)}></div>
            
            <ul className={active?"navbar__responsive-menu activeMenu" : "navbar__responsive-menu"}>
                <li className='navbar__responsive-menu__item'><Link to={'/'} className='navbar__responsive-menu__item__link'>Home</Link></li>
                <li className='navbar__responsive-menu__item'><Link to={'/Characters'} className='navbar__responsive-menu__item__link'>Characters</Link></li>
                <li className='navbar__responsive-menu__item'><Link to={'/Episodes'} className='navbar__responsive-menu__item__link'>Episodes</Link></li>
                <li className='navbar__responsive-menu__item'><Link to={'/Locations'} className='navbar__responsive-menu__item__link'>Locations</Link></li>
            </ul>
        </nav>
    );
}