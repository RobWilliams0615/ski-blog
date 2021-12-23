import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import React, { useState } from 'react';
import Result from './components/Result';
import FormInput from './Trailinput';
import Update from './components/Update';
import Footer from './Footer';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/trailform" component={FormInput} />
        <Route exact path="/updatetrails/:id" component={Update} />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
