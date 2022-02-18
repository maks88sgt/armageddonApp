import React from 'react';
import s from './Destruction.module.css';
import TextCard from "../TextCard/TextCard";
import DestructionCard from "./destructionCard/DestructionCard";


const Destruction = ({forDestroying, isDistance, dispatch}) => {
    console.log(forDestroying);
    return (
        <div className={s.nav}>
                {forDestroying.map((asteroid) => <div className={s.item}><DestructionCard asteroid={asteroid}
                                                                                   isDistance={isDistance}
                                                                                          dispatch={dispatch}/></div>)}
        </div>
    )
}



// const Destruction = ({forDestroying}) => {
//     console.log(forDestroying);
//     return (
//         <div className={s.nav}>
//             <div className={s.item}>
//                 {forDestroying.length}
//             </div>
//         </div>
//     )
// }



export default Destruction;
