import React, { useState, useEffect } from 'react';

import './styles.css';


import PropTypes from 'prop-types';
import axios from 'axios';
export default function Comments({searchUserGit, setsearchUserGit}) {

    
    const [ reposName, setReposName] = useState("");
    const [ comments, setComments] = useState("");
    

    const handleReposName  = (event) => {
      const value = event.target.value;
      setReposName(value);
    }

    const handleComments = (event) => {
      const value = event.target.value;
      
      setComments(value);
    }

    const handleSubmitComments = async (event) => {
      try {
        event.preventDefault();
        
        const result = await axios.get(`https://api.github.com/search/users?q=${searchUserGit}/repositories?q=${reposName}`);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <form action="" className="" onSubmit={handleSubmitComments}>
        <div className="form-label-group">
            <input type="text" className="" id="reposName" name="reposName"
                placeholder="Nom du repos" value={reposName} onChange={handleReposName} />
            <label htmlFor="reposName">Nom du repos</label>
        </div>

        <div className="form-label-group">
            <textarea type="text" className="" id="comments" name="comments"
              placeholder="Votre texte" value={comments} onChange={handleComments} />
            <label htmlFor="comments">Votre commentaire</label>
        </div>

        <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
    </form>
);
}

Comments.propTypes = {

};
