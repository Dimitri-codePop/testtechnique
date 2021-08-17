import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import PropTypes from 'prop-types';
export default function Home ()  {
  const [fetchUser, setFetchUser] = useState({});
  const [searchGit, setSearchGit] = useState("");
  const [ list, setList ] = useState([]);

   useEffect(() => {
     let fetchUser = localStorage.getItem('UserKeysUsed');
     fetchUser = JSON.parse(fetchUser);
     setFetchUser(fetchUser);
  }, []);

  const handleSearchGit = (event) => {
    const value = event.target.value;
    setSearchGit(value); 
  }

  const handleSubmitGit = async (event) => {
    try {
      event.preventDefault();

      const result = await axios.get(`https://api.github.com/search/users?q=${searchGit}`);
      const list = result.data.items.map((profil, i) => {
        return (
          <li key={i}>{profil.login}</li>
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
  <input className="" type="search" placeholder="Search" aria-label="Search" value={searchGit} onChange={handleSearchGit} />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  {list}
</>
)
}

Home.propTypes = {

};
