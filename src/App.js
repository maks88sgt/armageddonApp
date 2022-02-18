import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";
import {getAsteroids} from "./common/mocks/Mock";

const App = (props) => {
    const asteroids = getAsteroids();

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Content asteroids={asteroids}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
