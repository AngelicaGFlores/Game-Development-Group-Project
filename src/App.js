import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navi from './Components/Navi';
import Profile from './Components/Profile';
import Game from './Components/Game';
import Home from './Components/Home';

function App() {
  
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>

    <div className="App">
      <header className="App-header">
        {/* put navi always on the top */}
      <Navi></Navi>
      </header>
      <div className = "App-body">
        <Switch>
          {/* since we are using switch, it will be changed all the time when ever we click navi menu */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Navi}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
      </div>
    
      </div>
    </Router>
  );
  }

export default App;
