import React from 'react';
import s from './Card.module.css';
import {TextCardContainer} from "./TextCard/TextCardContainer";
import TextCard from "./TextCard/TextCard";



const Card = (props) => {
    const {asteroids,onlyDangerous} = props;

    const asteroidsArray = onlyDangerous ? asteroids.filter(asteroid=>asteroid.inDangerous) : asteroids;

    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <TextCard asteroid={asteroid}
                                                        key={asteroid.id}/>)}
        </div>
    )
}

export default Card;







