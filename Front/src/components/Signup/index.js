// == Import npm
import React from 'react';

import './styles.css';


import PropTypes from 'prop-types';
export default function signup() {

  
  return (
    <>
    <form action="/signup" method="POST" className="form-signin">
        <div className="form-label-group">
            <input type="lastname" className="form-control" id="lastname" name="lastname" aria-describedby="lastnameHelp"
                placeholder="Votre nom" value=""/>
            <label htmlFor="lastname">Votre nom</label>
        </div>

        <div className="form-label-group">
            <input type="firstname" className="form-control" id="firstname" name="firstname"
                aria-describedby="firstnameHelp" placeholder="Votre prénom" value=""/>
            <label htmlFor="firstname">Votre prénom</label>
        </div>

        <div className="form-label-group">
            <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                placeholder="Votre courriel" value=""/>
            <label htmlFor="email">Votre courriel</label>
        </div>

        <div className="form-label-group">
            <input type="password" className="form-control" id="password" name="password"
                placeholder="Votre mot de mot de passe" value=""/>
            <label htmlFor="password">Votre mot de mot de passe</label>
        </div>


        <div className="form-label-group">
            <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm"
                placeholder="Confirmez votre mot de passe" value="" />
            <label htmlFor="passwordConfirm" value="">Confirmez votre mot de passe</label>
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
