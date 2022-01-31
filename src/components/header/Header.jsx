import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <h3>ARMAGGEDON V </h3>
        <p>Сервис мониторинга и уничтожения астероидов,
            опасно подлетающих к Земле.</p>
    </header>
}

export default Header;