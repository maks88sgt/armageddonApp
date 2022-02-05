import React from 'react';
import s from './TextCard.module.css';
import dino from './../../../../img/dino.png';
import Destruction from './../../../../img/asteroid3.png';
import Close from './../../../../img/asteroid1.png';


const TextCard = ({asteroid, isDistance}) => {

    const distanceObject = isDistance ? `${asteroid.distance.kilometers} км` : `${asteroid.distance.moon} км`

    const statusObject= asteroid.inDangerous ? "опасен" : "неопасен";

    return (
        <div className={asteroid.inDangerous ? s.redGradient : s.greenGradient}>
            <img src={dino} className={s.dino} alt=""/>
            <img src={asteroid.inDangerous ? Destruction : Close} className={s.logoRed} alt=""/>
            <div className={s.nav}>
                <div className={s.header}>{asteroid.name}</div>
                <div className={s.item}>Дата {asteroid.date}</div>
                <div className={s.item}>Расстояние {distanceObject}</div>
                <div className={s.item}>Размер {asteroid.size}</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:</div>
                <div className={s.status}>{statusObject}</div>
                <button>На уничтожение</button>
            </div>
        </div>
    )
}



export default TextCard;