import React from 'react';
import s from './Card.module.css';
import {getAsteroids} from './../../../common/mocks/Mock';
import TextCard from "./TextCard/TextCard";


const Card = ({showDangerous}) => {
    const asteroidsArray = showDangerous ? getAsteroids().filter(asteroid=>asteroid.inDangerous) : getAsteroids();
    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <div className={s.item}><TextCard asteroid={asteroid}/></div>)}
        </div>
    )
}

export default Card;







