import React from 'react';
import s from './Destruction.module.css';


const Destruction = ({forDestroying}) => {
    console.log(forDestroying);
    return (
        <div className={s.nav}>
            <div className={s.item}>
                {forDestroying.length}
            </div>
        </div>
    )
}



export default Destruction;
