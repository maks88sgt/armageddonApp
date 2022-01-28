import React from 'react';
import s from './Asteroids.module.css';
import Card from "../card/Card";
import asteroid1 from './../../../img/asteroid1.jpg';
import asteroid2 from './../../../img/asteroid2.jpg';
import asteroid3 from './../../../img/asteroid3.jpg';

const Asteroids = () => {
    const asteroidsArray = getAsteroids();
    return (
        <div className={s.nav}>
            {asteroidsArray.map((asteroid) => <div className={s.item}>
                <Card asteroid={asteroid}/>
            </div>)}

        </div>
    )
}

export default Asteroids;

const getAsteroids = () => {
    const arrayLength = getRandomInt(1,5);
    const asteroids = Array.from({length: arrayLength});
    return asteroids.map(() => {
        return {
            name: names.split(" ")[getRandomInt(0, 15)],
            photo: imgs[0],
            status: myStatus.split(" ")[getRandomInt(0, 2)],
            date: getRandomInt(1995, 2022),
            distance: getRandomInt(0, 1000000000),
            size: getRandomInt(0, 100000)
        }
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const names = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, cupiditate " +
    "dolorem, earum facere illum iste iure nulla perspiciatis placeat qui quibusdam reprehenderit rerum " +
    "similique tempora totam veritatis vero voluptas."
const myStatus = "опасен неопасен"
const imgs = [asteroid3, asteroid2, asteroid1]







