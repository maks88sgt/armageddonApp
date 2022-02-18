import React, {useEffect, useReducer, useState,} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";


const Content = ({state, dispatch}) => {
    const [isDangerous, setIsDangerous] = useState(false);
    const [isDistance, setIsDistance] = useState(true);

    const [asteroids, setAsteroids] = useState([]);

    const dateObj = new Date();
    const day = dateObj.getUTCDate().toString();
    const month = (dateObj.getMonth() + 1).toString(); //months from 1-12
    const year = dateObj.getUTCFullYear();

    console.log("content");

    useEffect(()=>{
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-02-${day-7}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`)
            .then(response => response.json())
                .then(data => {
                    let asteroids = [];
                    const nearEarthObjects = data.near_earth_objects;
                    for (let day in nearEarthObjects) {
                        asteroids = asteroids.concat(nearEarthObjects[day])
                    }
                    dispatch(asteroids.map(asteroid => {
                        return {
                            name: asteroid.name,
                            date: asteroid.close_approach_data[0].close_approach_date,
                            distance: {
                                kilometers: Math.round(asteroid.close_approach_data[0].miss_distance.kilometers),
                                moon: Math.round(asteroid.close_approach_data[0].miss_distance.lunar),
                            },
                            size: ((asteroid.estimated_diameter.kilometers.estimated_diameter_min + asteroid.estimated_diameter.kilometers.estimated_diameter_max)/2).toFixed(3),
                            inDangerous: asteroid.is_potentially_hazardous_asteroid,
                        }
                    }));
                });
    }, [])


    return (
        <div>
            <Filter isDangerous={isDangerous}
                    setIsDangerous={setIsDangerous}
                    isDistance={isDistance}
                    setIsDistance={setIsDistance}/>
            <div className='menu-block'>
                <Routes>
                    <Route path="/" element={<Card  asteroids={asteroids}
                                                    showDangerous={isDangerous}
                                                    isDistance={isDistance}
                    state={state} dispatch={dispatch}/>}/>
                    <Route path="/asteroids" element={<Card  asteroids={asteroids}
                                                             showDangerous={isDangerous}
                                                             isDistance={isDistance}
                                                             state={state} dispatch={dispatch}
                    />}/>
                    <Route path="/destruction" element={<Destruction forDestroying={state.asteroidsForDestroying}
                                                                     isDistance={isDistance}
                                                                     dispatch={dispatch}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}




export default Content;
