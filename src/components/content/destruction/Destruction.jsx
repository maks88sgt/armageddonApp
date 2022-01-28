import React from 'react';
import s from './Destruction.module.css';
import asteroid3 from './../../../img/asteroid3.jpg';

const Destruction = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <img src={asteroid3} alt=""/>
            </div>
        </div>
    )
}



export default Destruction;