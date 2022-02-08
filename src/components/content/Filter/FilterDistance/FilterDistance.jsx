import React from 'react';
import s from './FilterDistance.module.css';

const FilterDistance = (props) => {
    const {isDistance, setIsDistance} = props;

    return (

        <div className={s.nav}>
            <div>Расстояние <span className={isDistance ? s.kilometers : s.moon } onClick={() => setIsDistance(true)}>в километрах</span>,
                <span className={isDistance ? s.moon : s.kilometers } onClick={() => setIsDistance(false)}>в дистанциях до луны</span></div>
        </div>
    )
}



export default FilterDistance;