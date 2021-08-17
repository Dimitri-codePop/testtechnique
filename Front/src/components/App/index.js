// == Import npm
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'src/components/Login';
import Signup from 'src/components/Signup';
import Home from 'src/components/Home';
import Comments from 'src/components/Comments';


// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
export default function App() {

  const [IsLogged, setIsLogged] = useState(false);

  return (
  <div className="app">
    <h1>Bienvenue sur Github Comments </h1>
    <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login IsLogged={IsLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route exact path="/home">
          <Home IsLogged={IsLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route exact path="/:id/comments">
          <Comments IsLogged={IsLogged} setIsLogged={setIsLogged} />
        </Route>
    </Switch>
  </div>)
};

