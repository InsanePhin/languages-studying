import logo from './logo.svg';
import './App.css';

const element1 = <div>This is JSX</div>;
function element2(args) {
    return args+" is args";
}

function Component(props) {
    return (
        <div>
            This is props.name => {props.name}
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, InsanePhin!
          {element1}
          {element2("This")}
          <Component name={"Phin"}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
