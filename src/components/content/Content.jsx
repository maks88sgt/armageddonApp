import React, {useState} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";

const Content = ({asteroids}) => {
    const [isDangerous, setIsDangerous] = useState(false);
    const [isDistance, setIsDistance] = useState(true);

    return (
        <div>
            <hr></hr>
            <Filter isDangerous={isDangerous}
                    setIsDangerous={setIsDangerous}
                    isDistance={isDistance}
                    setIsDistance={setIsDistance}/>
            <div className='menu-block'>
                <Routes>
                    <Route path="/" element={<Card  asteroids={asteroids}
                                                    showDangerous={isDangerous}
                                                    isDistance={isDistance}/>}/>
                    <Route path="/asteroids" element={<Card  asteroids={asteroids}
                                                             showDangerous={isDangerous}
                                                             isDistance={isDistance}/>}/>
                    <Route path="/destruction" element={<Destruction />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}




export default Content;