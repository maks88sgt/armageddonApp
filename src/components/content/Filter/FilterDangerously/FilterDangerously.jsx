import React, {useState} from 'react';
import s from './FilterDangerously.module.css';


const FilterDangerously = (props) => {
    const {isDangerous, setIsDangerous} = props;

    return (
        <div className={s.nav}>
            <label>
                <input type="checkbox" defaultChecked={isDangerous}
                       onClick={()=>setIsDangerous(!isDangerous)}></input>Показать только опасные
            </label>
        </div>
    )
}



export default FilterDangerously;