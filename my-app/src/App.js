import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Asteroids from "./components/content/asteroids/Asteroids";
import Destruction from "./components/content/destruction/Destruction";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="">
            <div className="upper-block">
              <Header/>
              <Navbar/>
            </div>
            <hr></hr>
            <Filter/>
            <div className='menu-block'>
              <Routes>
                <Route path="/" element={<Asteroids />}/>
                <Route path="/asteroids" element={<Asteroids />}/>
                <Route path="/destruction" element={<Destruction />}/>
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
