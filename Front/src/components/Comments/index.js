import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';


import PropTypes from 'prop-types';
import axios from 'axios';
export default function Comments() {

    const { id } = useParams();
    
    const [ reposName, setReposName] = useState("");
    const [ comments, setComments] = useState("");
    const [ fetchComment, setfetchComment] = useState([]);
    const [ errorMessage, setErrorMessage] = useState("");

    useEffect(async () => {
      const commentary = await axios.get(`http://localhost:4000/commentary/${id}`);
      

      if(!commentary.data.data){
        setErrorMessage("Aucun commentaire")
      }

      setfetchComment(commentary);
   }, []);
    

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
        
        const result = await axios.get(`https://api.github.com/repos/${id}/${reposName}`);

        setErrorMessage("Nous avons bien trouver le repos")

        console.log(result);

        const postCommentary = await axios.post(`http://localhost:4000/comment/${id}/${reposName}`, {comments});
        console.log(postCommentary);
        
      } catch (error) {
        console.trace(error);
        
        setErrorMessage("Le repos demander n'existe pas");
      }
    }

  return (
  <>
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

    <h1>{errorMessage}</h1>

    </>
);
}

Comments.propTypes = {

};
