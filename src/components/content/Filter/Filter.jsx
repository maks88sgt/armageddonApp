import React from 'react';
import s from './Filter.module.css';
import FilterDangerously from "./FilterDangerously/FilterDangerously";
import FilterDistance from "./FilterDistance/FilterDistance";

const Filter = (props) => {
    const {isDangerous, setIsDangerous} = props;
    const {isDistance, setIsDistance} = props;

    return (
        <div className={s.nav}>
            <FilterDangerously isDangerous={isDangerous} setIsDangerous={setIsDangerous}/>
            <FilterDistance isDistance={isDistance} setIsDistance={setIsDistance}/>
        </div>
    )
}



export default Filter;