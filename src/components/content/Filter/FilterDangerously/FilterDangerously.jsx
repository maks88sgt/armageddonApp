import React, {useState} from 'react';
import s from './FilterDangerously.module.css';


const FilterDangerously = () => {
    const [isDangerous, setIsDangerous] = useState(false);
    return (
        <div className={s.nav}>
            <label>
                <input type="checkbox" checked={isDangerous}
                       onClick={()=>setIsDangerous(!isDangerous)}></input>Показать только опасные
            </label>
        </div>
    )
}



export default FilterDangerously;