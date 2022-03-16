import React, {useContext} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import {CardContainer} from "./Cards/CardContainer";
import {DestructionContainer} from "./Cards/destruction/DestroyingContainer";


const Content = () => {

    return (
        <div>
            <hr></hr>
            <Filter />
            <div className='menu-block'>
                <Routes>
                    <Route path="/armageddonApp" element={<CardContainer />}/>
                    <Route path="/destruction" element={<DestructionContainer />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}




export default Content;
