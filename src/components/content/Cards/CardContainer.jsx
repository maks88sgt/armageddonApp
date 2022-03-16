import {useContext} from "react";
import Card from "./Card";
import {MyContext} from "../../../App";

export const CardContainer = () => {
    const {state, dispatch} = useContext(MyContext);
    return <Card asteroids={state.asteroids}
                 onlyDangerous={state.onlyDangerous}
                 setDestory={()=>dispatch({type: 'TYPE',})}/>
}



