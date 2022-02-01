import React from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";

const Content = () => {
    return (
        <div>
            <hr></hr>
            <Filter/>
            <div className='menu-block'>
                <Routes>
                    <Route path="/" element={<Card />}/>
                    <Route path="/asteroids" element={<Card />}/>
                    <Route path="/destruction" element={<Destruction />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}



export default Content;