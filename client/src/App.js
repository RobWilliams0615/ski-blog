import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import React, { useState } from 'react';
import Result from './components/Result';
import FormInput from './Trailinput';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="main">
        <h1>Welcome to the Ski-Blog</h1>

        <Route path="/" component={Home} />
        <Route exact path="/trailform" component={FormInput} />
        <Route exact path="/result" component={Result} />
      </div>
    </div>
  );
}

export default App;