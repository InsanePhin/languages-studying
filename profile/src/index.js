import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function tick() { 
    const element = ( 
        <div> <h1>Hello, world!</h1> 
        <h2>It is {new Date().toLocaleTimeString()}.</h2> 
        </div> 
    );
    ReactDOM.render(
        tick.element,
        document.getElementById('time')
    );
}   

reportWebVitals(console.log);
setInterval(tick, 1000);