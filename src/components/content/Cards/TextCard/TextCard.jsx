import React from 'react';
import s from './TextCard.module.css';
import dino from './../../../../img/dino.png';
import Destruction from './../../../../img/asteroid3.png';
import Close from './../../../../img/asteroid1.png';


const TextCard = ({asteroids, isDistance, asteroid}) => {
    const asteroidsDistance = isDistance ? asteroids.filter(asteroid=>asteroid.distance/1000) : asteroids.distance;

    return (
        <div className={asteroid.inDangerous ? s.greenGradient : s.redGradient}>
            <img src={dino} className={s.dino} alt=""/>
            <img src={asteroid.inDangerous ? Close : Destruction} className={s.logoRed} alt=""/>
            <div className={s.nav}>
                <div className={s.header}>{asteroid.name}</div>
                <div className={s.item}>Дата {asteroid.date}</div>

                {asteroidsDistance.map((asteroid) => <div className={s.item}>Расстояние {asteroid.distance}</div>)}

                <div className={s.item}>Расстояние {asteroid.distance}</div>
                <div className={s.item}>Размер {asteroid.size}</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:</div>
                <div className={s.status}>{asteroid.inDangerous ? "неопасен" : "опасен"}</div>
                <button>На уничтожение</button>
            </div>
        </div>
    )
}



export default TextCard;