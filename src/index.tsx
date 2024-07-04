import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import { BusArrivalLookup } from './pages/BusArrivalLookup';
import { BusHistory } from "./pages/BusHistory";
import { HomePage } from "./pages/HomePage";

import './index.scss';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> }>
                    <Route path="/lookup" element={ <BusArrivalLookup /> }></Route>
                    <Route path="/history" element={ <BusHistory /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
