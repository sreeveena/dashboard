import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';

function App() {
  return (
    <div style={{backgroundColor: 'black'}}className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      
      </header> */}
      <Chart />
    </div>
  );
}

export default App;
