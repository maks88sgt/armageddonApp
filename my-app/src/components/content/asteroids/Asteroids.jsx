import React from 'react';
import s from './Asteroids.module.css';
import asteroid1 from './../../../img/asteroid1.jpg';
import asteroid2 from './../../../img/asteroid2.jpg';
import asteroid3 from './../../../img/asteroid3.jpg';
import Card from "../card/Card";

const Content = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <img src={asteroid1} alt=""/>
                <Card/>
            </div>
            <div className={s.item}>
                <img src={asteroid2} alt=""/>
                <Card/>
            </div>
            <div className={s.item}>
                <img src={asteroid3} alt=""/>
                <Card/>
            </div>
        </div>
    )
}



export default Content;