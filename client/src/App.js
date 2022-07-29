import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import './App.css';
// import AddEmployee from './components/AddEmployee';
// import Sendmsgform from './components/Sendmsgform';
// import First from './components/First';
import Routes from './routes/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
  {/* <Sendmsgform/> */}
     <Routes/>
      </div>
    );
  }
}

export default App;