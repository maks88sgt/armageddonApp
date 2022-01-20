import React from 'react';
import s from './Card.module.css';

const Card = () => {
    return (
        <div>
            <div className={s.nav}>
                <div className={s.header}>2021</div>
                <div className={s.item}>Дата........................</div>
                <div className={s.item}>Расстояние..................</div>
                <div className={s.item}>Размер.......................</div>
            </div>
            <div className={s.grade}>
                <div className={s.text}>Оценка:</div>
                <div className={s.status}>опасен</div>
                <button>На уничтожение</button>
            </div>
        </div>
    )
}



export default Card;