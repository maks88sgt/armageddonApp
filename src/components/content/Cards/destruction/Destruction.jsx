import React, {useContext} from 'react';
import s from './Destruction.module.css';
import DestructionCard from "./destructionCard/DestructionCard";
import {MyContext} from "../../../../App";


const Destruction = (props) => {
    const {forDestroying, onlyDangerous} = props;

    const forDestroyingArray = onlyDangerous ? forDestroying.filter(asteroid=>asteroid.inDangerous) : forDestroying;
    return (
        <div className={s.nav}>
                {forDestroyingArray.map((asteroid) => <div className={s.item}><DestructionCard asteroid={asteroid}
                                                                                          key={asteroid.id}/></div>)}
        </div>
    )
}

export default Destruction;
