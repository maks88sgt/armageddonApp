import React from 'react';
import s from './Filter.module.css';

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
                    <div>Расстояние</div>
                    <div className={s.item}>
                        <div>в километрах</div>
                    </div>
                    <div className={s.item}>
                        <div>в дистанциях до луны</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Filter;