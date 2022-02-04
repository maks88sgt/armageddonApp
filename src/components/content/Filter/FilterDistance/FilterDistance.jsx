import React from 'react';
import s from './FilterDistance.module.css';

const FilterDistance = (props) => {
    const {isDistance, setIsDistance} = props;

    return (
        <div className={s.nav}>
            <div>Расстояние </div>
            <form>
                <input type="radio" id="radio1" name="radios" value="all"
                       onClick={()=>setIsDistance(!isDistance)}/>
                <label htmlFor="radio1">в километрах,</label>
                <input type="radio" id="radio2" name="radios" value="false"
                       onClick={()=>setIsDistance(!isDistance)}/>
                <label htmlFor="radio2">в дистанциях до луны</label>
            </form>
        </div>
    )
}



export default FilterDistance;