import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Time() {
    return (
        <div className="Time">
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

ReactDOM.render(
    Time,
    document.getElementById('time')
);

reportWebVitals(console.log);
setInterval(Time, 1000);