import React, {useContext} from 'react';
import Navbar from './navbar/Navbar'
import s from './Header.module.css';
import {MyContext} from "../../App";

const Header = () => {
    const {state} = useContext(MyContext);


    return (
        <div className={s.nav}>
            <div className={s.item}>
                <h3>{state.asteroidsForDestroying.length}</h3>
                <p>Сервис мониторинга и уничтожения астероидов,
                    опасно подлетающих к Земле.</p>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;
