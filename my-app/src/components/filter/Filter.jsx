import React from 'react';
import s from './Filter.module.css';
import {NavLink} from "react-router-dom";

const Filter = () => {
    return (
        <div className={s.filter}>
            <div>
                <div className={s.switch}>
                    <label>
                        <input type="checkbox" value="no"></input>Показать только опасные
                    </label>
                </div>
            </div>
            <div className={s.distance}>
                <div className={s.nav}>
                    <div>Расстояние </div>
                    <div className={s.item}>
                        <form>
                            <input type="radio" id="radio1" name="radios" value="all" checked/>
                                <label htmlFor="radio1">в километрах,</label>
                                <input type="radio" id="radio2" name="radios" value="false"/>
                                    <label htmlFor="radio2">в дистанциях до луны</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Filter;