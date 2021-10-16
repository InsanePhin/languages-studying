import React from 'react';
import ReactDOM from 'react-dom';

function hello() {
    const element = (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
    ReactDOM.render(element, document.getElementById('hello'));
}

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);