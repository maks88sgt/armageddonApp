import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";



const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Content/>
        </div>
      </BrowserRouter>
  );
}

export default App;
