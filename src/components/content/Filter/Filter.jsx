import React from 'react';
import s from './Filter.module.css';
import FilterDangerously from "./FilterDangerously/FilterDangerously";
import FilterDistance from "./FilterDistance/FilterDistance";

const Filter = (props) => {
    const {isDangerous, setIsDangerous} = props;

    return (
        <div className={s.nav}>
            <FilterDangerously isDangerous={isDangerous} setIsDangerous={setIsDangerous}/>
            <FilterDistance/>
        </div>
    )
}



export default Filter;