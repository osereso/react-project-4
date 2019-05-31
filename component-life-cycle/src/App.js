import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Component life cycle</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Body></Body>

      </header>
    </div>

  );
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {};
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }

  getRandomNumber() {
    console.log("random number")
  }

  render(){
    return(
      <div>
        <p>
          vaaaaalaaaamiiii
        </p>
        <button onClick={this.getRandomNumber}> Random number </button>
      </div>
    );
  }
}

export default App;
