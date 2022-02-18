import React, {createContext, useReducer} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";

export const MyContext = createContext();

const App = () => {

    const initialState = {asteroidsForDestroying: [], onlyDangerous: false}

    const asteroidsReducer = (state, action) => {
        switch (action?.type) {
            case 'ADD':
                return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying, action.payload]};
            case 'DELETE':
                return {...state, asteroidsForDestroying: [...state.asteroidsForDestroying.filter(item => item.name !== action.payload.name)]};
            case 'CHANGE_ONLY_DANGEROUS':
                return {...state, onlyDangerous: !state.onlyDangerous};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(asteroidsReducer, initialState);


    return (
        <MyContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Content state={state} dispatch={dispatch}/>
                </div>
            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;
