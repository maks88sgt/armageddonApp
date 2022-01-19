import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/asteroids">Астеройды</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/destruction">Уничтожение</NavLink>
            </div>
        </nav>
    )
}



export default Navbar;