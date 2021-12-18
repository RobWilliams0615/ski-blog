import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import React, { useState } from 'react';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home} />
      </header>
    </div>
  );
}

export default App;
