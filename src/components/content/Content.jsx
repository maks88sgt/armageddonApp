import React, {useState} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";
import FilterDistance from "./Filter/FilterDistance/FilterDistance";

const Content = ({asteroids}) => {
    const [isDangerous, setIsDangerous] = useState(false);

    return (
        <div>
            <hr></hr>
            <Filter isDangerous={isDangerous}
                    setIsDangerous={setIsDangerous}/>
            <div className='menu-block'>
                <Routes>
                    <Route path="/" element={<Card  asteroids={asteroids}
                                                    showDangerous={isDangerous}/>}/>
                    <Route path="/asteroids" element={<Card  asteroids={asteroids}
                                                             showDangerous={isDangerous}/>}/>
                    <Route path="/destruction" element={<Destruction />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}



export default Content;