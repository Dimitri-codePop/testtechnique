// == Import npm
import React from 'react';

import './styles.css';


import PropTypes from 'prop-types';
export default function login () {
  return (
    <div className="row">
        <div className="col-6 offset-3">
          <form action="" method="POST" className="form-signup">
                <div className="form-label-group">
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                        placeholder="Votre courriel" value=""/>
                    <label htmlFor="email">Votre courriel</label>
                </div>

                <div className="form-label-group">
                    <input type="password" className="form-control" id="password" name="password"
                        placeholder="Votre mot de passe"/>
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
);
}

login.propTypes = {

};
