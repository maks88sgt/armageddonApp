import React from 'react';
import s from './Card.module.css';
import TextCard from "./TextCard/TextCard";


const Card = ({showDangerous, asteroids, isDistance, dispatch}) => {

    const asteroidsArray = showDangerous ? asteroids.filter(asteroid=>asteroid.inDangerous) : asteroids;

    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <div className={s.item}><TextCard asteroid={asteroid}
                                                                                isDistance={isDistance} dispatch={dispatch}/></div>)}
        </div>
    )
}

export default Card;







