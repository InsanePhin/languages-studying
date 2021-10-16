import React from 'react';
import ReactDOM from 'react-dom';

function hello() {
    const hello = (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
    ReactDOM.render(hello, document.getElementById('hello'));
}

function tick() {
  const time = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(time, document.getElementById('time'));
}

setInterval(tick, 1000);