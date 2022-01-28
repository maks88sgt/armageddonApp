import React from 'react';
import s from './Card.module.css';



const Card = ({asteroid}) => {
    return (
        <div>
            <img src={asteroid.photo} alt=""/>
            <div>
                <div className={s.nav}>
                    <div className={s.header}>{asteroid.name}</div>
                    <div className={s.item}>Дата {asteroid.date}</div>
                    <div className={s.item}>Расстояние {asteroid.distance}</div>
                    <div className={s.item}>Размер {asteroid.size}</div>
                </div>
                <div className={s.grade}>
                    <div className={s.text}>Оценка:</div>
                    <div className={s.status}>{asteroid.status}</div>
                    <button>На уничтожение</button>
                </div>
            </div>
        </div>
    )
}



export default Card;