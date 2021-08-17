
import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';


import PropTypes from 'prop-types';
export default function signup() {

const [ lastname, setLastname ] = useState("");
const [ firstname, setFirstname] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ confirmPassword, setConfirmPassword ] = useState("");

const handleLastname = (event) => {
  const value = event.target.value;
  setLastname(value); 
}
const handleFirstname = (event) => {
  const value = event.target.value;
  setFirstname(value); 
}
const handleEmail = (event) => {
  const value = event.target.value;
  setEmail(value); 
}
const handlePassword = (event) => {
  const value = event.target.value;
  setPassword(value); 
}
const handleConfirmPassword = (event) => {
  const value = event.target.value;
  setConfirmPassword(value); 
}

const handleSubmit = async (event) => {
  try {
    event.preventDefault();

    const result = await axios.post('http://localhost:4000/signup', {lastname, firstname, email, password, confirmPassword});

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
    <form action="" onSubmit={handleSubmit} className="form-signin">
        <div className="form-label-group">
            <input type="lastname" className="form-control" id="lastname" name="lastname" aria-describedby="lastnameHelp"
                placeholder="Votre nom" value={lastname} onChange={handleLastname}/>
            <label htmlFor="lastname">Votre nom</label>
        </div>

        <div className="form-label-group">
            <input type="firstname" className="form-control" id="firstname" name="firstname"
                aria-describedby="firstnameHelp" placeholder="Votre prénom" value={firstname} onChange={handleFirstname}/>
            <label htmlFor="firstname">Votre prénom</label>
        </div>

        <div className="form-label-group">
            <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                placeholder="Votre courriel" value={email}  onChange={handleEmail}/>
            <label htmlFor="email">Votre courriel</label>
        </div>

        <div className="form-label-group">
            <input type="password" className="form-control" id="password" name="password"
                placeholder="Votre mot de mot de passe" value={password}  onChange={handlePassword}/>
            <label htmlFor="password">Votre mot de mot de passe</label>
        </div>


        <div className="form-label-group">
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"
                placeholder="Confirmez votre mot de passe" value={confirmPassword} onChange={handleConfirmPassword}/>
            <label htmlFor="confirmPassword" value="">Confirmez votre mot de passe</label>
        </div>

        <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
    </form>
    <div>
      <p> Vous êtes deja inscrit ? </p>
      <a href="/login"><button type="button" className="">Login</button></a>
    </div>
  </>
);
}

signup.propTypes = {

};
