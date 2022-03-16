
import TextCard from "../destruction/destructionCard/DestructionCard";
import {MyContext} from "../../../../App";
import {useContext} from "react";


export const TextCardContainer = () => {
    const {state, dispatch} = useContext(MyContext);

    return <TextCard asteroid={state.asteroid}
                 setIsDistance={state.setIsDistance}
                 addNew={()=>dispatch({type: 'ADD',})}/>
}



