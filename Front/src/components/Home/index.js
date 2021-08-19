import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import PropTypes from 'prop-types';
export default function Home ({searchUserGit, setsearchUserGit})  {
  const [fetchUser, setFetchUser] = useState({});
  const [ list, setList ] = useState([]);

   useEffect(() => {
     let fetchUser = localStorage.getItem('UserKeysUsed');
     fetchUser = JSON.parse(fetchUser);
     setFetchUser(fetchUser);
  }, []);

  const handlesearchUserGit = (event) => {
    const value = event.target.value;
    setsearchUserGit(value); 
  }

  const handleSubmitGit = async (event) => {
    try {
      event.preventDefault();

      const result = await axios.get(`https://api.github.com/search/users?q=${searchUserGit}`);
      const list = result.data.items.map((profil, i) => {
        const url = `/${profil.login}/comments`
        return (
          <li key={i}> <a href={url}>{profil.login}</a></li>
        )
      })
      
      setList(list);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
<>
  <h1>Bienvenue {fetchUser.firstname}</h1>
  <form className="form-inline" onSubmit={handleSubmitGit}>
  <input className="" type="search" placeholder="Search" aria-label="Search" value={searchUserGit} onChange={handlesearchUserGit} />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  {list}
</>
)
}

Home.propTypes = {

};
