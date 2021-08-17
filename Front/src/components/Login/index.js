// == Import npm
import React,{ useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './styles.css';


import PropTypes from 'prop-types';
export default function login ({ IsLogged, setIsLogged }) {

const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");

const handleEmail = (event) => {
  const value = event.target.value;
  setEmail(value); 
}

const handlePassword = (event) => {
  const value = event.target.value;
  setPassword(value); 
}

const handleSubmit = async (event) => {
  try {
    event.preventDefault();

    const result = await axios.post('http://localhost:4000/login', { email, password});

    result.IsLogged = true;
    setIsLogged(true);

    localStorage.setItem('UserKeysUsed', JSON.stringify(result.data));


  } catch (error) {
    console.log(error);
  }
}

  return (
     IsLogged ? (<Redirect to="/home" />) : (
< div className = "row" >
    <div className="col-6 offset-3">
      <form action="" onSubmit={handleSubmit} className="form-signup">
            <div className="form-label-group">
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                    placeholder="Votre courriel" value={email} onChange = {handleEmail}/>
                <label htmlFor="email">Votre courriel</label>
            </div>

            <div className="form-label-group">
                <input type="password" className="form-control" id="password" name="password"
                    placeholder="Votre mot de passe" value = {password} onChange = {handlePassword} />
                <label htmlFor="password">Votre mot de passe</label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
        </form>
        <div>
      <p> Vous n'avez pas de compte ? </p>
      <a href="/"><button type="button" className="">Signup</button></a>
    </div>
  </div>
</div>
)
)
    
}

login.propTypes = {

};
