import React from 'react';
import s from './TextCard.module.css';
import dino from './../../../../img/dino.png';
import Logo from './../../../../img/asteroid3.png';
import LogoNew from './../../../../img/asteroid1.png';


const TextCard = ({asteroid}) => {
    return (
        <div className={asteroid.inDangerous ? s.greenGradient : s.redGradient}>
            <img src={dino} className={s.dino} alt=""/>
            <img src={asteroid.inDangerous ? Logo : LogoNew } className={s.logoRed} alt=""/>
            <div className={s.nav}>
                <div className={s.header}>{asteroid.name}</div>
                <div className={s.item}>Дата {asteroid.date}</div>
                <div className={s.item}>Расстояние {asteroid.distance}</div>
                <div className={s.item}>Размер {asteroid.size}</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:</div>
                <div className={s.status}>{asteroid.inDangerous ? "опасен" : "неопасен"}</div>
                <button>На уничтожение</button>
            </div>
        </div>
    )
}



export default TextCard;