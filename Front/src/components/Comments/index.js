import React, { useState, useEffect } from 'react';

import './styles.css';


import PropTypes from 'prop-types';
export default function Comments() {
  return (
    <form action="" className="">
        <div className="form-label-group">
            <input type="text" className="" id="reposName" name="reposName"
                placeholder="Nom du repos" value="" />
            <label htmlFor="reposName">Nom du repos</label>
        </div>

        <div className="form-label-group">
            <textarea type="text" className="" id="comments" name="comments"
              placeholder="Votre texte" value="" />
            <label htmlFor="comments"></label>
        </div>

        <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
    </form>
);
}

Comments.propTypes = {

};
