import React, {useEffect, useState,} from 'react';
import Filter from './Filter/Filter';
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Destruction from "./Cards/destruction/Destruction";
import Card from "./Cards/Card";


const Content = () => {
    const [isDangerous, setIsDangerous] = useState(false);
    const [isDistance, setIsDistance] = useState(true);

    const [asteroids, setAsteroids] = useState([]);

    const dateObj = new Date();
    const day = dateObj.getUTCDate().toString();
    const month = dateObj.getMonth() + 1; //months from 1-12
    const monthNew = month.toString();
    const year = dateObj.getUTCFullYear();

    useEffect(()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-02-06&end_date=2022-02-08&api_key=hkQaHyIJbOLvUSJqbj6Djuty0kImWfPu0Nu8yyB3')
            .then(response => response.json())
                .then(data => {
                    let asteroids = [];
                    const nearEarthObjects = data.near_earth_objects;
                    for (let day in nearEarthObjects) {
                        asteroids = asteroids.concat(nearEarthObjects[day])
                    }
                    setAsteroids(asteroids.map(asteroid => {
                        return {
                            name: asteroid.name,
                            date: asteroid.close_approach_data[0].close_approach_date,
                            distance: {
                                kilometers: asteroid.close_approach_data[0].miss_distance.kilometers,
                                moon: asteroid.close_approach_data[0].miss_distance.lunar,
                            },
                            size: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
                            inDangerous: asteroid.is_potentially_hazardous_asteroid,
                        }
                    }));
                });
    }, [])


    return (
        <div>
            <hr></hr>
            <Filter isDangerous={isDangerous}
                    setIsDangerous={setIsDangerous}
                    isDistance={isDistance}
                    setIsDistance={setIsDistance}/>
            <div className='menu-block'>
                <Routes>
                    <Route path="/armageddonApp" element={<Card  asteroids={asteroids}
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