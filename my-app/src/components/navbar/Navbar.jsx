import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/asteroids" className = { navData => navData.isActive ? s.active : s.item }>Астеройды</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/destruction" className = { navData => navData.isActive ? s.active : s.item }>Уничтожение</NavLink>
            </div>
        </nav>
    )
}



export default Navbar;