import React from 'react';
import classNames from "classnames";
import s from './FilterDistance.module.css';
import './FilterDistance.module.css';

const FilterDistance = (props) => {
    const {isDistance, setIsDistance} = props;

    const classKilometers = classNames({
        'kilometers': isDistance,
    })

    const classMoon = classNames ({
        'kilometers': !isDistance,
    })

    return (
        <div className={s.nav}>
            <div>Расстояние <span className={classKilometers} onClick={() => setIsDistance(true)}>в километрах</span>,
                <span className={classMoon} onClick={() => setIsDistance(false)}>в дистанциях до луны</span></div>
        </div>
    )
}



export default FilterDistance;