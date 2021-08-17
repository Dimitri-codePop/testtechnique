// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'src/components/Login';
import Signup from 'src/components/Signup';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
    </Switch>
  </div>
);

// == Export
export default App;
