import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import PropTypes from 'prop-types';
export default function Home () {
  const [fetchUser, setFetchUser] = useState({});

  useEffect( () => {
     setFetchUser(localStorage.getItem('UserKeysUsed'));
  }, [])
  console.log(fetchUser);

  return (
<>
  <h1>Bienvenue {fetchUser.firstname}</h1>
  <form className="form-inline">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

</>
);
}

Home.propTypes = {

};
